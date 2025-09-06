from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
from google import genai
from google.genai import types
import json, re

# Load .env locally
load_dotenv()

# Grab API key
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    raise ValueError("❌ GEMINI_API_KEY not found in environment!")

# Create client with API key
client = genai.Client(api_key=api_key)

app = Flask(__name__)

@app.route("/test", methods=["GET"])
def test():
    return jsonify({"status": "ok"})

@app.route("/analyze", methods=["POST"])
def analyze():
    f = request.files["image"]
    img_bytes = f.read()
    image_part = types.Part.from_bytes(data=img_bytes, mime_type=f.mimetype)

    prompt = (
        "Look at this fridge photo and list the food items you see. "
        "Return ONLY valid JSON in the format: {\"items\": [\"item1\", \"item2\", ...]}"
    )

    resp = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=[prompt, image_part]
    )

    text = resp.text.strip()
    text = re.sub(r"^```(?:json)?|```$", "", text)
    data = json.loads(text)

    return jsonify(data)
