import psycopg2
import json
import dateutil.parser as dparser
import re

def send_data_to_postgres(data):
    conn = psycopg2.connect(
        host="stampdeck-stampdeck.i.aivencloud.com",
        database="defaultdb",
        user="avnadmin",
        password="AVNS_5f2wN10uNb_WG6vY3TN",
        port="19541"
    )
    cur = conn.cursor()
    
    # Assuming data is a list of dictionaries, adapt it based on your structure.
    try:
        for item in data:
            # Replace with your table name and column names.
            cur.execute("""INSERT INTO api_product ("name", "releaseDate", "denomination", "quantity", "printer", "stampImage", "fdcImage", "brochure") VALUES (%s, %s, %s, %s, %s, %s, %s, %s)""", (item['name'], dparser.parse(item['releaseDate'],fuzzy=True, dayfirst=True), int(re.match(r'\d+', item['denomination']).group()), int(re.match(r'\d+', item['quantity'].replace(',', '')).group()), item['printer'], item['stampImage'], item['fdcImage'], item['brochure']))
    except Exception as e:
        print(f'Error occurred: {e}')
        print(item)
    finally:
        conn.commit()
        cur.close()
        conn.close()
        print("Successfully uploaded data!")

with open('../frontend/src/assets/products.js', 'r') as f:
    data = f.read()
    start_index = data.find('{')
    end_index = data.rfind('}') + 1
    json_string = '[' + data[start_index:end_index] + ']'

    products = json.loads(json_string)
    
    send_data_to_postgres(products)
