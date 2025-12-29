import google.generativeai as genai
from backend.config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

def generate_embeddings(text: str):
    """Generates embeddings using Gemini Embedding API."""
    result = genai.embed_content(
        model="models/text-embedding-004",
        content=text,
        task_type="retrieval_document"
    )
    return result['embedding']

def get_embedding_model():
    """Mock for compatibility with ingest.py to provide dimension."""
    class MockModel:
        def get_sentence_embedding_dimension(self):
            return 768 # models/embedding-001 dimension
    return MockModel()
