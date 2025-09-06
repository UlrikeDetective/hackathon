import os
from flask import Flask, request, jsonify
from google.genai import Client, TextInput, ImageInput

# Initialize Flask app
app = Flask(__name__)

# Initialize Gemini client using API key from environment
api_key = os.environ.get("GEMINI_API_KEY")
if not api_key:
    raise ValueError("GEMINI_API_KEY environment variable not set")

client = Client(api_key=api_key)

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

    # --- Step 1: Detect items from the fridge image ---
    try:
        detection_response = client.chat(
            model="gemini-2.5",
            messages=[{
                "author": "user",
                "content": [
                    ImageInput(image_file.read()),
                    TextInput(text="List all the food items in this fridge image as a comma-separated list.")
                ]
            }]
        )
        items_text = detection_response.output_text
        items_list = [item.strip() for item in items_text.split(",") if item.strip()]
    except Exception as e:
        return jsonify({"error": f"Detection failed: {str(e)}"}), 500

    if not items_list:
        return jsonify({"error": "No items detected in the image."}), 200

    # --- Step 2: Generate a recipe based on detected items ---
    try:
        recipe_prompt = (
            f"You have these ingredients: {', '.join(items_list)}. "
            "Suggest a simple recipe with step-by-step instructions."
        )
        recipe_response = client.chat(
            model="gemini-2.5",
            messages=[{"author": "user", "content": [TextInput(text=recipe_prompt)]}]
        )
        recipe_text = recipe_response.output_text.strip()
    except Exception as e:
        return jsonify({"error": f"Recipe generation failed: {str(e)}"}), 500

    return jsonify({
        "detected_items": items_list,
        "recipe": recipe_text
    })


if __name__ == "__main__":
    # Cloud Run expects port 8080
    app.run(host="0.0.0.0", port=8080)
