
# SMC Entry Finder Web App

This web app scans trading chart images and suggests Smart Money Concepts (SMC) based buy/sell entries.

## Features
- Upload chart image
- Backend image processing (FastAPI)
- Entry zone, stop loss, and TP suggestions

## Setup Instructions
1. Run backend:
   ```
   cd backend
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

2. Run frontend:
   ```
   cd frontend
   npm install
   npm start
   ```

## Author
Built by shashikajp
