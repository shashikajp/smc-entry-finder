
from fastapi import FastAPI, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from smc_logic import analyze_chart

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.post("/analyze")
async def analyze(file: UploadFile):
    contents = await file.read()
    result = analyze_chart(contents)
    return result
