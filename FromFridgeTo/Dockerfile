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
