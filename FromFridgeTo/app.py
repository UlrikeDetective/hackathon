import os
from flask import Flask, request, jsonify
from google.genai import Client

# Initialize Flask app
app = Flask(__name__)

# Initialize Gemini client using API key from environment
client = Client(api_key=os.environ.get("GEMINI_API_KEY"))

@app.route("/")
def home():
    return """
    <h1>FromFridgeTo</h1>
    <p>Upload a fridge image at /analyze to detect items and get a recipe.</p>
    """

@app.route("/analyze", methods=["POST"])
def analyze():
    if "image" not in request.files:
        return jsonify({"error": "No image provided"}), 400

    image_file = request.files["image"]

    # Step 1: Detect items in the fridge image (multimodal)
    detection_response = client.generate_content(
        model="gemini-2.5",
        modalities=["image", "text"],
        input=image_file.read(),
        prompt="List all the food items in this fridge image as a comma-separated list."
    )

    items_text = detection_response.text
    items_list = [item.strip() for item in items_text.split(",")]

    # Step 2: Generate a recipe based on detected items
    recipe_prompt = (
        f"You have these ingredients: {', '.join(items_list)}. "
        "Suggest a simple recipe with step-by-step instructions."
    )

    recipe_response = client.generate_content(
        model="gemini-2.5",
        contents=[recipe_prompt]
    )

    recipe_text = recipe_response.text.strip()

    return jsonify({
        "detected_items": items_list,
        "recipe": recipe_text
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8080)
