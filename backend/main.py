import os
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
import numpy as np
from tensorflow.keras.models import load_model
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# scaler yükleme yöntem
scaler=pickle.load(open(os.path.join(os.path.dirname(__file__),"scaler.pkl"),"rb"))

# model yükleme (doğru yöntem)
model = load_model(os.path.join(os.path.dirname(__file__), "model.keras"))


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Student(BaseModel):
    hours: float
    scores: float
    activities: int
    sleep: float
    papers: float

@app.get("/")
def home():
    return {"message": "API çalışıyor"}

@app.post("/predict")
def predict(data: Student):
    features = np.array([[
        data.hours,
        data.scores,
        data.activities,
        data.sleep,
        data.papers
    ]])

    features = scaler.transform(features)
    prediction = model.predict(features)

    return {
        "prediction": float(prediction[0][0])
    }