# Plan: Integrated RAG Chatbot

## Phase 1: Backend Development
1.  **Project Structure**: Create a `backend` directory.
2.  **Environment Setup**: Define `.env.example` and set up `requirements.txt`.
3.  **FastAPI Core**: Implement `main.py` with basic health checks and CORS.
4.  **Embedding Layer**: Implement a utility to generate embeddings using `all-MiniLM-L6-v2`.
5.  **Qdrant Integration**: Implement vector search and ingestion logic.
6.  **Neon Postgres Integration**: Set up chat history table and session management.
7.  **OpenAI Agent Logic**: Implement the RAG pipeline using OpenAI's latest SDK.
8.  **Ingestion Script**: Create a script to parse `docs/*.md` files and upload them to Qdrant.

## Phase 2: Frontend Development
1.  **Docusaurus Component**: Create a `Chatbot` component in `src/components`.
2.  **Aesthetic Styling**: Use CSS for a premium, modern look (glassmorphism, subtle gradients).
3.  **Floating Button**: Implement a responsive floating button.
4.  **Chat Interface**: Implement a message-based chat UI with auto-scrolling and loading states.
5.  **Selection Logic**: Use browser APIs to detect text selection and provide a "Context-Aware" query option.
6.  **Integration**: Embed the component into the Docusaurus layout (site-wide).

## Phase 3: Integration & Polish
1.  **Data Ingestion**: Run the ingestion script to populate Qdrant.
2.  **Testing**: Verify RAG responses follow book context and maintain human tone.
3.  **Animations**: Add smooth transitions using React-Spring or Framer Motion (if available) or CSS animations.

## Key Decisions
- **Embeddings**: We will use `sentence-transformers` locally in the backend for `all-MiniLM-L6-v2` to maintain consistency and potentially save costs.
- **Frontend Integration**: We will use a `ThemeConfig` wrapper or a global component injection to ensure the chat is available on all pages.

## Risks
- **Cold Boot (Neon/Qdrant)**: Free tiers might have latency; need handling for loading states.
- **Context Window**: Managing long book content; chunking strategy is key.
