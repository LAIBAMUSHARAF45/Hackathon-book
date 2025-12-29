import uuid
from fastapi import FastAPI, HTTPException, Body
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional

from backend.config import GEMINI_API_KEY
from backend.embeddings_utils import generate_embeddings, get_embedding_model
from backend.qdrant_utils import init_collection, search_vectors
from backend.postgres_utils import init_db, save_message, get_history
import google.generativeai as genai

app = FastAPI(title="Hackathon Book RAG Chatbot")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


genai.configure(api_key=GEMINI_API_KEY)
model = genai.GenerativeModel('gemini-flash-latest')

class ChatRequest(BaseModel):
    message: str
    session_id: Optional[str] = None
    selected_text: Optional[str] = None


@app.on_event("startup")
async def startup_event():
    init_db()
    # Initialize Qdrant collection with the correct dimension
    embedding_dim = get_embedding_model().get_sentence_embedding_dimension()
    init_collection(embedding_dim)

@app.post("/chat")
async def chat(request: ChatRequest):
    session_id = request.session_id or str(uuid.uuid4())
    
    try:
        # 1. Generate embedding for the query
        query_vector = generate_embeddings(request.message)
        
        # 2. Search Qdrant for context
        search_results = search_vectors(query_vector)
        context = "\n".join([r.payload.get("text", "") for r in search_results])
        
        # 3. Handle selected text
        extra_context = ""
        if request.selected_text:
            extra_context = f"\n\nThe user has selected the following text from the book:\n{request.selected_text}\nPlease answer their question with specific focus on this selection if relevant."

        # 4. Get chat history
        history = get_history(session_id)
        
        # 5. Call Gemini
        system_prompt = f"You are a helpful, human-toned assistant for the 'Hackathon Book'. Your goal is to answer questions strictly based on the provided context. If the answer is not in the context, politely say you don't know based on the book's content. Context from book:\n{context}{extra_context}"
        
        prompt_parts = [system_prompt, "\nChat History:"]
        for h in history:
            prompt_parts.append(f"{h['role'].title()}: {h['content']}")
        
        prompt_parts.append(f"User: {request.message}\nAssistant:")
        
        full_prompt = "\n".join(prompt_parts)

        response = model.generate_content(full_prompt)
        answer = response.text
        
        # 6. Save messages to history
        save_message(session_id, "user", request.message)
        save_message(session_id, "assistant", answer)
        
        return {
            "answer": answer,
            "session_id": session_id
        }
    except Exception as e:
        import traceback
        with open("error.log", "w") as f:
            f.write(traceback.format_exc())
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health():
    return {"status": "ok"}
