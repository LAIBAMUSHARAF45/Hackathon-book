from qdrant_client import QdrantClient
from qdrant_client.http import models
from backend.config import QDRANT_URL, QDRANT_API_KEY, COLLECTION_NAME

client = QdrantClient(
    url=QDRANT_URL,
    api_key=QDRANT_API_KEY,
)

def init_collection(vector_size: int):
    collections = client.get_collections().collections
    existing_collection = next((c for c in collections if c.name == COLLECTION_NAME), None)
    
    if existing_collection:
        # Check current collection info
        info = client.get_collection(COLLECTION_NAME)
        current_size = info.config.params.vectors.size
        if current_size != vector_size:
            print(f"Dimension mismatch (existing: {current_size}, new: {vector_size}). Recreating collection...")
            client.delete_collection(COLLECTION_NAME)
            client.create_collection(
                collection_name=COLLECTION_NAME,
                vectors_config=models.VectorParams(size=vector_size, distance=models.Distance.COSINE),
            )
    else:
        client.create_collection(
            collection_name=COLLECTION_NAME,
            vectors_config=models.VectorParams(size=vector_size, distance=models.Distance.COSINE),
        )

def upsert_points(points):
    client.upsert(
        collection_name=COLLECTION_NAME,
        points=points
    )

def search_vectors(vector: list, limit: int = 5):
    return client.query_points(
        collection_name=COLLECTION_NAME,
        query=vector,
        limit=limit,
    ).points
