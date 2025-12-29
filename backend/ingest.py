import os
import glob
import uuid
from backend.embeddings_utils import generate_embeddings, get_embedding_model
from backend.qdrant_utils import init_collection, upsert_points
from qdrant_client.http import models

def chunk_text(text, chunk_size=500, overlap=50):
    chunks = []
    words = text.split()
    for i in range(0, len(words), chunk_size - overlap):
        chunk = " ".join(words[i:i + chunk_size])
        if chunk:
            chunks.append(chunk)
    return chunks

def ingest_docs(docs_dir="docs"):
    # 1. Get embedding model to determine vector size
    model = get_embedding_model()
    vector_size = model.get_sentence_embedding_dimension()
    
    # 2. Initialize Qdrant collection
    init_collection(vector_size)
    
    # 3. Read markdown files
    md_files = glob.glob(os.path.join(docs_dir, "**/*.md"), recursive=True)
    
    points = []
    for file_path in md_files:
        print(f"Processing {file_path}...")
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            
        chunks = chunk_text(content)
        for chunk in chunks:
            import time
            time.sleep(0.1)
            vector = generate_embeddings(chunk)
            point_id = str(uuid.uuid4())
            points.append(models.PointStruct(
                id=point_id,
                vector=vector,
                payload={
                    "text": chunk,
                    "source": file_path
                }
            ))
            
            # Upsert in batches of 50
            if len(points) >= 50:
                upsert_points(points)
                points = []
    
    # Final upsert
    if points:
        upsert_points(points)
    
    print("Ingestion complete!")

if __name__ == "__main__":
    ingest_docs()
