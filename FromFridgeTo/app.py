import os
import logging
from flask import Flask, request, jsonify, render_template
import google.generativeai as genai
from dotenv import load_dotenv
from PIL import Image
from io import BytesIO

# Load .env (local dev only, Cloud Run uses secrets/env vars)
load_dotenv()

logging.basicConfig(level=logging.INFO)

app = Flask(__name__)

# Configure Gemini
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY not found in environment variables.")

genai.configure(api_key=api_key)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/test")
def test():
    return "App is running!"

def parse_items(items_text):
    if ":" in items_text:
        items_text = items_text.split(":", 1)[1]
    return [item.strip() for item in items_text.split(",") if item.strip()]

@app.route("/analyze", methods=["POST"])
def analyze():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image_file = request.files["image"]
    img_pil = Image.open(BytesIO(image_file.read()))
    if img_pil.mode != "RGB":
        img_pil = img_pil.convert("RGB")

    # --- Step 1: detect items ---
    try:
        model = genai.GenerativeModel("gemini-1.5-flash")
        response = model.generate_content(
            ["List all the food items in this fridge image as a comma-separated list.", img_pil]
        )
        items_list = parse_items(response.text)
    except Exception as e:
        logging.exception("Detection failed")
        return jsonify({"error": f"Detection failed: {str(e)}"}), 500

    if not items_list:
        return jsonify({"error": "No items detected"}), 200

    # --- Step 2: recipe suggestion ---
    try:
        recipe_prompt = (
            f"You have these ingredients: {', '.join(items_list)}. "
            "Suggest a simple recipe with step-by-step instructions."
        )
        recipe_response = model.generate_content(recipe_prompt)
        recipe_text = recipe_response.text.strip()
    except Exception as e:
        logging.exception("Recipe generation failed")
        return jsonify({"error": f"Recipe generation failed: {str(e)}"}), 500

    return jsonify({
        "detected_items": items_list,
        "recipe": recipe_text
    })

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)
