# backend/main.py

from fastapi import FastAPI
from pydantic import BaseModel
import requests  # для Telegram API
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Разрешаем все источники (можешь потом ограничить под свой домен)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # или ["http://localhost:3000"] для ограничений
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Настройки сервера
SERVER_PORT = 8000  # Измените на нужный порт
SERVER_HOST = "0.0.0.0"




class ContactForm(BaseModel):
    name: str
    email: str
    phone: str
    message: str

TELEGRAM_TOKEN = '7163739772:AAHB8FXXp_IStmyy8pmMd8Tz20nJNr6DhSc'
CHAT_ID = '410301582'

@app.post("/send-message")
async def send_message(data: dict):
    name = data.get('name', '')
    email = data.get('email', '')
    phone = data.get('phone', '')
    message = data.get('message', '')

    text = f"Новая заявка:\nИмя: {name}\nEmail: {email}\nТелефон: {phone}\nСообщение: {message}"

    telegram_url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    payload = {
        "chat_id": CHAT_ID,
        "text": text
    }
    response = requests.post(telegram_url, data=payload)

    return {"status": "ok", "telegram_response": response.json()}