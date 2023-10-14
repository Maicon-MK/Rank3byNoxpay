from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector

api = Flask(__name__)
CORS(api)
# Configuration for database login
db_config = {
    "host": "localhost",
    "user": "root",
    "password": "root",
    "database": "buzzlightyear",
}

#Function to call all currencies
@api.route("/cryptocurrencies", methods=["GET"])
def vizualizar_coins():
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor(dictionary=True)  
    #SQL query to show all coins with votes and id
    query = "SELECT * FROM cryptocurrencies"

    cursor.execute(query)
    result = cursor.fetchall()
    print(result)
    return jsonify(result)

# Function to call a currency by id
@api.route("/cryptocurrencies/<id>", methods=["POST"])
def add_vote(id):
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()  
    #SQL query to show only the selected currency by id
    query = "SELECT * FROM cryptocurrencies WHERE id=%s"
    values = (id,)
    cursor.execute(query, values)
    result = cursor.fetchone()
    print(result)

    if result == None:
        return jsonify("cryptocurrency not found")

    print(id)
    return jsonify(result)

#Function to insert a vote
@api.route("/criptocurrencies/vote/<id>", methods=["POST"])
def adicionar_voto(id):
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()

    #SQL query to add vote in selected currency
    query = "UPDATE cryptocurrencies SET vote = vote +1 WHERE id=%s"

    
    cursor.execute(query, (id,))

    conn.commit()
    conn.close()
    return jsonify({"message": "Vote added successfully."}), 200

#Function to rank coins from most voted to least voted
@api.route('/rankings', methods=["GET"])
def listar_votos():
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)  

        # SQL query to fetch all votes ordered from highest to lowest
        query = "SELECT * FROM cryptocurrencies ORDER BY vote DESC"
        cursor.execute(query)
        result = cursor.fetchall()
        conn.close()

        return jsonify(result), 200


if __name__ == "__main__":
    api.run(port=5000, host="localhost", debug=True)
