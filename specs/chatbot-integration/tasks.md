# Tasks: Integrated RAG Chatbot

## Phase 1: Backend
- [ ] Initialize Python environment and `requirements.txt`. <!-- id: 0 -->
- [ ] Create `backend/embeddings_utils.py` for `all-MiniLM-L6-v2`. <!-- id: 1 -->
- [ ] Create `backend/qdrant_utils.py` for vector DB interactions. <!-- id: 2 -->
- [ ] Create `backend/postgres_utils.py` for Neon DB interactions. <!-- id: 3 -->
- [ ] Implement `backend/ingest.py` to index the `docs` folder. <!-- id: 4 -->
- [ ] Implement `backend/main.py` with `/chat` and `/ingest` (admin) endpoints. <!-- id: 5 -->

## Phase 2: Frontend
- [ ] Create `src/components/Chatbot/index.tsx` and `Chatbot.module.css`. <!-- id: 6 -->
- [ ] Implement the floating icon UI. <!-- id: 7 -->
- [ ] Implement the chat window UI (messages, input). <!-- id: 8 -->
- [ ] Connect frontend to FastAPI `/chat` endpoint. <!-- id: 9 -->
- [ ] Implement text selection "Ask Chatbot" functionality. <!-- id: 10 -->

## Phase 3: Finalization
- [ ] Run ingestion on the book's `docs`. <!-- id: 11 -->
- [ ] Add Premium animations and styling. <!-- id: 12 -->
- [ ] Verify contextual responses and "soft-coded" behavior. <!-- id: 13 -->
