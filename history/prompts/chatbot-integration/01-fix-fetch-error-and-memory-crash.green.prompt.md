---
id: 1
title: Fix Chatbot Fetch Error and Memory Crash
stage: green
date_iso: 2025-12-27
surface: agent
model: gemini-2.0-flash
feature: chatbot-integration
branch: main
user: LAIBAMUSHARAF45
command: none
labels: ["bug-fix", "backend", "memory-optimization", "rag"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
---

# Prompt History Record (PHR)

## Prompt Text
index.js:3 
 Error sending message: TypeError: Failed to fetch
    at handleSendMessage (index.js:3:1)
    at handleKeyPress (index.js:3:1)

## Response Text
The user encountered a `TypeError: Failed to fetch` in the Docusaurus frontend. Investigation revealed:
1. The backend was crashing with `MemoryError` due to local `SentenceTransformer` loading on a 4GB RAM machine (with <300MB available).
2. The `qdrant-client` version had breaking API changes (`search` vs `query_points`).
3. Gemini model names and quotas needed adjustment.

I performed the following:
- Switched `backend/embeddings_utils.py` to use Gemini Embedding API.
- Switched `backend/main.py` to use `gemini-flash-latest`.
- Updated `backend/qdrant_utils.py` to use `client.query_points`.
- Created `backend/__init__.py` to allow running as a module.
- Ran `backend/ingest.py` with rate limiting to populate the database.
- Verified backend is running and responding to requests.

## Outcome
The chatbot is now functional and the fetch error is resolved. The system uses Cloud AI to stay within local resource limits.

## Files Modified
- c:\hackathon-book\backend\embeddings_utils.py
- c:\hackathon-book\backend\main.py
- c:\hackathon-book\backend\qdrant_utils.py
- c:\hackathon-book\backend\ingest.py
- c:\hackathon-book\backend\__init__.py
