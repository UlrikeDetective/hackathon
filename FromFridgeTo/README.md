# From Fridge to 🍳🥗

**From Fridge to** is a small web applet that demonstrates the power of Google’s Gemini multimodal AI.  
Upload a photo of your fridge, and the app detects the ingredients and suggests recipes you can cook with what you have.  

This project combines **image understanding** and **text generation** using Gemini 2.5 Flash/Pro and is deployed on **Google Cloud Run**.

---
### Part of the Join the Google AI Studio Multimodal Challenge:

We're excited to announce our first challenge with Google AI!

Running through September 14, the Google AI Studio Multimodal Challenge invites you to build and deploy innovative applets that showcase the incredible power of Gemini's multimodal capabilities.

There's one prompt for this challenge but three chances to win! We hope you give it a try.

Our Prompt
Your mission is to build and deploy an applet on Google AI Studio that shows off the power of Gemini in multimodal content understanding and/or generation.

#### Your applet must meet these requirements:

Built on Google AI Studio
Deployed using Cloud Run
Utilize at least one of the below multimodal functionality:
Gemini 2.5 Pro / Flash-supported image, video, or audio understanding
Gemini 2.5 Flash Image (free tier available for Sept 6-7)
Live API (free tier supports 3 concurrent sessions)
Imagen (requires paid tier)
Veo (requires paid tier)

<https://dev.to/devteam/join-the-google-ai-studio-multimodal-challenge-3000-in-prizes-58g?>
---

## Features

- Upload a fridge photo and automatically detect food items.  
- Generate recipe suggestions based on available ingredients.  
- Multimodal: combines image recognition and natural language reasoning.  
- Works locally with `.env` or in Cloud Run using Google Secret Manager.  

---

## Screenshots / Demo

<img src="https://github.com/UlrikeDetective/hackathon/blob/main/FromFridgeTo/app_pics/App_start.png" alt="- - - app start pic - - -" width="65%">
<img src="https://github.com/UlrikeDetective/hackathon/blob/main/FromFridgeTo/app_pics/App_result01.png" alt="- - - recipe result part one - - -" width="50%">
<img src="https://github.com/UlrikeDetective/hackathon/blob/main/FromFridgeTo/app_pics/App_result02.png" alt="- - - recipe result part two - - -" width="50%">


---

## Getting Started

### Prerequisites

virtual enviroment
```bash
python3 -m venv venv
source venv/bin/activate
```

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

## Deployment to Google Cloud Run

This section outlines the steps to deploy this Flask application to Google Cloud Run.

### Containerization (Dockerfile)

The application is containerized using a `Dockerfile`, which defines the environment and commands to run the application within a Docker container. This `Dockerfile` is used by Google Cloud Build to create the container image.

```dockerfile
# Use official lightweight Python image
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy requirements and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app
COPY . .

# Set the port Cloud Run will use
ENV PORT 8080

# Expose the port
EXPOSE 8080

# Run the app with Gunicorn WSGI server
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "app:app"]
```
## Test locally Docker

```bash
docker build -t from-fridge-to .
docker run -p 8080:8080 from-fridge-to
````

**Prerequisites:**
*   Ensure you have the Google Cloud SDK installed and authenticated.
*   Set your `gcloud` project:
    ```bash
    gcloud config set project challenge-471312
    ```

**Steps:**

1.  **Enable necessary Google Cloud APIs:**
    ```bash
    gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
    ```

2.  **Create an Artifact Registry repository:**
    ```bash
    gcloud artifacts repositories create from-fridge-to-app --repository-format=docker --location=us-central1 --description="Docker repository for FromFridgeTo app"
    ```

3.  **Build and push the Docker image to Artifact Registry:**
    ```bash
    gcloud builds submit --tag us-central1-docker.pkg.dev/challenge-471312/from-fridge-to-app/from-fridge-to-app
    ```

4.  **Store your Gemini API Key in Secret Manager:**
    ```bash
    echo "YOUR_GEMINI_API_KEY" | gcloud secrets create GEMINI_API_KEY --data-file=-
    ```
    (Replace `YOUR_GEMINI_API_KEY` with your actual key)
    If you need to update the key:
    ```bash
    echo "YOUR_UPDATED_GEMINI_API_KEY" | gcloud secrets versions add GEMINI_API_KEY --data-file=-
    ```

5.  **Grant Cloud Run service account permission to access the secret:**
    First, get the service account email:
    ```bash
    gcloud run services describe from-fridge-to-app --platform managed --region us-central1 --format='value(spec.template.spec.serviceAccountName)'
    ```
    Then, grant the permission (replace `SERVICE_ACCOUNT_EMAIL` with the email from the previous command):
    ```bash
    gcloud secrets add-iam-policy-binding GEMINI_API_KEY --member="serviceAccount:SERVICE_ACCOUNT_EMAIL" --role="roles/secretmanager.secretAccessor"
    ```

6.  **Deploy the image to Cloud Run and configure the secret:**
    ```bash
    gcloud run deploy from-fridge-to-app --image us-central1-docker.pkg.dev/challenge-471312/from-fridge-to-app/from-fridge-to-app --platform managed --region us-central1 --allow-unauthenticated --set-secrets=GEMINI_API_KEY=GEMINI_API_KEY:latest
    ```
7. ## **Redeploy

```bash
gcloud builds submit --tag gcr.io/challenge-471312/fromfridgeto
gcloud run deploy fromfridgeto \
  --image gcr.io/challenge-471312/fromfridgeto \
  --platform managed \
  --region europe-west1 \
  --allow-unauthenticated \
  --set-secrets=GEMINI_API_KEY=gemini-api-key:latest
```

After these steps, your application should be deployed and accessible at the provided Cloud Run URL.

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
