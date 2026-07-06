from fastapi import FastAPI
from pydantic import BaseModel


app = FastAPI()

class student(BaseModel):
    name:str
    id:int
    div:str

@app.get("/hello/")
def hello():
    return {"messege":"hello world !"}

