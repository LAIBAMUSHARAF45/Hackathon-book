import requests

try:
    response = requests.post(
        "http://localhost:8001/chat",
        json={"message": "hello", "session_id": "test"},
        headers={"Origin": "http://localhost:3000"}
    )
    print(f"Status Code: {response.status_code}")
    print("Headers:", response.headers)
    print("Body:", response.text)
except Exception as e:
    print(e)
