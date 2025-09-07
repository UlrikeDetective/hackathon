import os
import logging
from flask import Flask, request, jsonify, render_template
import google.generativeai as genai
from google.cloud import secretmanager
import PIL.Image
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)

# Initialize Flask app
app = Flask(__name__)

def access_secret_version(secret_id, version_id="latest"):
    """
    Access the payload for the given secret version if running in GCP.
    Otherwise, fall back to environment variables.
    """
    project_id = os.environ.get("GCP_PROJECT")
    if project_id:
        client = secretmanager.SecretManagerServiceClient()
        name = f"projects/{project_id}/secrets/{secret_id}/versions/{version_id}"
        response = client.access_secret_version(name=name)
        return response.payload.data.decode("UTF-8")
    
    # Fallback for local development
    return os.environ.get(secret_id)


# Initialize Gemini client
api_key = access_secret_version("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY not found in Secret Manager or environment variables.")

genai.configure(api_key=api_key)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/test")
def test():
    return "App is running!"

@app.route("/analyze", methods=["POST"])
def analyze():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image_file = request.files["image"]
    img = PIL.Image.open(image_file.stream)


    # --- Step 1: Detect items from the fridge image ---
    try:
        model = genai.GenerativeModel('gemini-1.5-flash-latest')
        response = model.generate_content(["List all the food items in this fridge image as a comma-separated list.", img])
        items_text = response.text
        items_list = [item.strip() for item in items_text.split(",") if item.strip()]
    except Exception as e:
        logging.error(f"Detection failed: {e}")
        return jsonify({"error": "Detection failed. See logs for details."}), 500

    if not items_list:
        return jsonify({"error": "No items detected in the image."}), 200

    # --- Step 2: Generate a recipe based on detected items ---
    try:
        model = genai.GenerativeModel('gemini-1.5-flash-latest')
        recipe_prompt = (
            f"You have these ingredients: {', '.join(items_list)}. "
            "Suggest a simple recipe with step-by-step instructions."
        )
        response = model.generate_content(recipe_prompt)
        recipe_text = response.text.strip()
    except Exception as e:
        logging.error(f"Recipe generation failed: {e}")
        return jsonify({"error": "Recipe generation failed. See logs for details."}), 500

    return jsonify({
        "detected_items": items_list,
        "recipe": recipe_text
    })


if __name__ == "__main__":
    # Cloud Run expects the port to be set in the PORT environment variable
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)