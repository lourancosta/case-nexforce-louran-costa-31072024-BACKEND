import requests
import pandas as pd
import json

url = "http://localhost:8000/api/partners"
req = requests.get(url, timeout=5)
response = req.json()

partners = {
  'name': [],
  'country': []
}

for partner in response:
  name = partner.get("name")
  partnersNames = partners.get('name')
  partnersNames.append(name)

  country = partner.get("country")
  partnersCountries = partners.get('country')
  partnersCountries.append(country)

partner_df = pd.DataFrame(partners)
print(partner_df)
print('')

amountPartnersByCountry = partner_df['country'].value_counts()
print(amountPartnersByCountry)
print('')

report_df = pd.DataFrame(amountPartnersByCountry)
jsonReport = report_df.to_json()

def write_json(list):
  with open('report.json', 'w') as f:
    json.dump(list, f)

write_json(jsonReport)

