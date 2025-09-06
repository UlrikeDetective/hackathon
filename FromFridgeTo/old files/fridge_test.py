from google import genai
from google.genai import types
from dotenv import load_dotenv
import os, json, re

# Load environment variables from .env
load_dotenv()

# Now GEMINI_API_KEY is available as an env var
client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

# Path to your fridge image
image_path = "fridge_pics/fridge2.jpg"

with open(image_path, "rb") as f:
    img_bytes = f.read()

image_part = types.Part.from_bytes(data=img_bytes, mime_type="image/jpeg")

prompt = (
    "Look at this fridge photo and list the food items you see. "
    "Return ONLY valid JSON in the format: "
    "{ \"items\": [\"item1\", \"item2\", ...] }"
)

resp = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=[prompt, image_part]
)

# Clean response and parse JSON
text = resp.text.strip()
text = re.sub(r"^```(?:json)?|```$", "", text)
data = json.loads(text)

print("Detected items:")
for item in data["items"]:
    print("-", item)
