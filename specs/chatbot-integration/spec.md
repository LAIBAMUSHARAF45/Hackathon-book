# Spec: Integrated RAG Chatbot

## Goal
Build and embed a Retrieval-Augmented Generation (RAG) chatbot within the Docusaurus-published book to answer questions based on the book's content.

## Tech Stack
- **Frontend**: Docusaurus (React), CSS/Styling (Premium/Aesthetic)
- **Backend**: FastAPI (Python)
- **Language Model**: OpenAI (GPT-4o or GPT-3.5-turbo via ChatKit SDKs/OpenAI Agents)
- **Embeddings**: `all-MiniLM-L6-v2` (Sentence-Transformers)
- **Vector Database**: Qdrant Cloud Free Tier
- **Database**: Neon Serverless Postgres (for session management/history)

## Features
- **Floating Chat Icon**: A stylish, animated floating button in the bottom-right corner.
- **RAG System**: Automatically retrieves relevant context from the book's documentation files.
- **Selection-Based Querying**: Ability to answer questions based on user-selected text from the page.
- **Soft-Coded Agent**: Dynamic understanding of query schema; tone is human-like and strictly adheres to book context.
- **Session History**: Persisted in Neon Postgres.

## Constraints
- Must use `all-MiniLM-L6-v2` for embeddings.
- Must use OpenAI for the response generation.
- Must be integrated into the Docusaurus UI.
- Context should be limited to the book's content.

## Success Criteria
- [ ] Backend setup with FastAPI.
- [ ] Qdrant collection initialized with book content embeddings.
- [ ] Neon Postgres integration for history.
- [ ] Frontend floating icon with chat interface.
- [ ] Selection-based answering functionality.
- [ ] Premium UI/UX with smooth animations.
