import requests
from requests.structures import CaseInsensitiveDict
from urllib.parse import quote, urlencode
import sys
import json

# Parameters
api_key = "53bc05c2b55b484fabd3edb050912758" 

base_url = "https://api.geoapify.com/v1/geocode/search"

#address = sys.argv[1]
address = "100 rue St-Denis, Montreal, QC"

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
coords = [feature['geometry']['coordinates'] for feature in data['features']]


limit = 50
categories = quote("catering,commercial,education,healthcare")
base_url_places = 'https://api.geoapify.com/v2/places'
lat = coords[0][0]
long = coords[0][1]
range = 1000
filter_circle = f'circle:{lat},{long},{range}'

# Build the URL with parameters
url = f"{base_url_places}?categories={categories}&filter={filter_circle}&limit={limit}&apiKey={api_key}"

resp = requests.get(url, headers=headers)

print(resp.content)
