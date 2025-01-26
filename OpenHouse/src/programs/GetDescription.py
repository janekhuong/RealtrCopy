import openai
import subprocess
import sys

# Set up your OpenAI API key
openai.api_key = "replace this"


def chat_with_gpt(prompt):
    try:
        response = openai.ChatCompletion.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,  # Adjust creativity (0.0 - conservative, 1.0 - creative)
            max_tokens=150,   # Adjust response length
        )
        return response['choices'][0]['message']['content']
    except Exception as e:
        return f"An error occurred: {e}"

# Example usage
user_prompt = "This is a description of places near a certain location; \
 give a very quick summary of the area, in 3-4 sentences and without bullet points."
result = subprocess.run(['python', 'GetPlaces.py'], input=sys.argv[1], capture_output=True, text=True)
user_prompt += result.stdout
response = chat_with_gpt(user_prompt)
print(response)
