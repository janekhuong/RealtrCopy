import requests
from requests.structures import CaseInsensitiveDict
import sys
from urllib.parse import quote, urlencode

api_key = "53bc05c2b55b484fabd3edb050912758"
base_url = 'https://api.geoapify.com/v2/places'

# Parameters
limit = 50


categories = quote("activity,commercial,catering,education,entertainment,healthcare")
lat = sys.argv[1]
long = sys.argv[2]
range = 1000
filter_circle = 'circle:{lat},{long},{range}'

# Build the URL with parameters
url = f"{base_url}?categories={categories}&filter={filter_circle}&limit={limit}&apiKey={api_key}"

headers = CaseInsensitiveDict()
headers["Accept"] = "application/json"

resp = requests.get(url, headers=headers)

print(resp.content)
