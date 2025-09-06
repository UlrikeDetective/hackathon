# From Fridge to 🍳🥗

**From Fridge to** is a small web applet that demonstrates the power of Google’s Gemini multimodal AI.  
Upload a photo of your fridge, and the app detects the ingredients and suggests recipes you can cook with what you have.  

This project combines **image understanding** and **text generation** using Gemini 2.5 Flash/Pro and is deployed on **Google Cloud Run**.

---

## Features

- Upload a fridge photo and automatically detect food items.  
- Generate recipe suggestions based on available ingredients.  
- Multimodal: combines image recognition and natural language reasoning.  
- Works locally with `.env` or in Cloud Run using Google Secret Manager.  

---

## Screenshots / Demo

*(Add images of the frontend or output JSON here)*

---

## Getting Started

### Prerequisites

- Python 3.11+  
- `pip`  
- Google Cloud account with **Generative AI (Gemini) API** enabled  
- `gcloud` CLI installed  

---

### Installation

1. Clone the repo:

```bash
git clone https://github.com/UlrikeDetective/Hackathons/FromFridgeTo.git
cd FromFridgeTo
```

### 2. Install Python dependencies:
```bash 
pip install -r requirements.txt
```

### 3. Create a .env file in the project root:

GEMINI_API_KEY=your_api_key_here

### 4. Run locally:
```bash
python app.py
```
Open your browser at http://127.0.0.1:5000/test to check that the app is running.

### Usage

POST an image to /analyze (via HTML frontend or curl).

The app will return JSON with a list of detected items:

{
  "items": ["eggs", "spinach", "cheddar", "milk"]
}

### Deployment (Cloud Run)

Store your API key in Google Secret Manager:

```bash
gcloud secrets create gemini-api-key --replication-policy="automatic"
echo -n "your_api_key_here" | gcloud secrets versions add gemini-api-key --data-file=-
```


Build and submit container:

```bash gcloud builds submit --tag gcr.io/PROJECT_ID/fridge-chef
```


Deploy to Cloud Run:

```bash
gcloud run deploy fridge-chef \
  --image gcr.io/PROJECT_ID/fridge-chef \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --set-secrets=GEMINI_API_KEY=gemini-api-key:latest
  ```

### Project Structure
FromFridgeTo/
├── app.py            # Flask backend
├── requirements.txt  # Python dependencies
├── Dockerfile        # Cloud Run container
├── .env              # Local API key (ignored by git)
├── .gitignore
└── README.md

### Test app
```bash
curl -X POST -F "image=@fridge_pics/fridge1.png" https://fromfridgeto-578201669268.europe-west1.run.app/analyze
```


### License

MIT License © 2025 Ulrike Herold