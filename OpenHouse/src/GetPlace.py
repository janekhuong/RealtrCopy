import requests
from requests.structures import CaseInsensitiveDict
import sys


api_key = "53bc05c2b55b484fabd3edb050912758"
base_url = 'https://api.geoapify.com/v2/places'

# Parameters
limit = 5


categories = sys.argv[1]
lat = sys.argv[2]
long = sys.argv[3]
range = sys.argv[4]
filter_circle = 'circle:{lat},{long},{range}'

# Build the URL with parameters
url = f"{base_url}?categories={categories}&filter={filter_circle}&limit={limit}&apiKey={api_key}"


#url = "https://api.geoapify.com/v2/places?categories=commercial.supermarket&filter=rect%3A10.716463143326969%2C48.755151258420966%2C10.835314015356737%2C48.680903341613316&limit=20&apiKey=53bc05c2b55b484fabd3edb050912758"

headers = CaseInsensitiveDict()
headers["Accept"] = "application/json"

resp = requests.get(url, headers=headers)

print(resp.content)