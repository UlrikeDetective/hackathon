# From Fridge to

*This is a submission for the [Google AI Studio Multimodal Challenge](https://dev.to/challenges/google-ai-studio-2025-09-03)*

## What I Built
"From Fridge to" is a web applet that helps users reduce food waste and discover new recipes. By simply uploading a photo of their refrigerator's contents, the app leverages Google's Gemini multimodal AI to identify available ingredients. It then intelligently suggests recipes that can be made with those ingredients, providing a practical solution for meal planning and utilizing existing food items.

## Demo
*(Please provide a link to your deployed applet here `https://from-fridge-to-app-578201669268.us-central1.run.app`)*
*(Include screenshots or videos of your solution here. For example, a screenshot of the upload page, a fridge photo, and the resulting recipe suggestions. If Gemini 2.5 Flash Image was used during a free trial and is no longer available, a video demonstration is highly recommended.)*

## How I Used Google AI Studio
I leveraged Google AI Studio by integrating the Gemini 2.5 Flash/Pro model. This allowed me to utilize its powerful multimodal capabilities for both image understanding and text generation. Specifically, Gemini was used to:
- Analyze uploaded images of fridge contents to identify and extract individual food items.
- Generate creative and relevant recipe suggestions based on the detected ingredients.

## Multimodal Features
The core multimodal features of "From Fridge to" are:
- **Image Recognition (Gemini 2.5 Flash/Pro):** The application takes an image input (a photo of a fridge) and processes it using Gemini's vision capabilities to accurately identify various food items and ingredients within the image. This enhances the user experience by automating the ingredient listing process, making it quick and effortless.
- **Natural Language Generation (Gemini 2.5 Flash/Pro):** Based on the identified ingredients, Gemini generates natural language recipe suggestions. This goes beyond simple keyword matching by understanding the context of the ingredients and providing coherent, actionable recipes, significantly enhancing the user's ability to utilize their existing food.

## Challenges Faced:
- Finding an idea ;-)
- API rate limits
- Deployment to Google Cloud (encountered some internal errors)

<!-- Don't forget to add a cover image (if you want). -->

<!-- Team Submissions: Please pick one member to publish the submission and credit teammates by listing their DEV usernames directly in the body of the post. -->

<!-- Thanks for participating! -->