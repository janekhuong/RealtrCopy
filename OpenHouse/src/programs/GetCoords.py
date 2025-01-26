import requests
from requests.structures import CaseInsensitiveDict
from urllib.parse import quote, urlencode
import sys
import json


api_key = "53bc05c2b55b484fabd3edb050912758" 

base_url = "https://api.geoapify.com/v1/geocode/search"

address = sys.argv[1]


# Encode the text
encoded_address = quote(address)

# Construct the full URL
full_url = f"{base_url}?text={encoded_address}&limit=1&apiKey={api_key}"

headers = CaseInsensitiveDict()
headers["Accept"] = "application/json"

resp = requests.get(full_url, headers=headers)

# Parse the JSON string into a Python dictionary
data = json.loads(resp.text)

# Extract the coordinates for all features
coordinates = [feature['geometry']['coordinates'] for feature in data['features']]
print(coordinates[0])
