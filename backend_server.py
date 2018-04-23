import os
import cx_Oracle
from flask import Flask

db_user = 'root'
db_password = 'R@nger2211'
db_connect = '129.156.113.135:3306/mydatabase'


app = Flask(__name__)

@app.route('/')
def index():
    connection = cx_Oracle.connect(db_user, db_password, db_connect)
    cur = connection.cursor()
    # cur.execute("SELECT * FROM mydb")
    # col = cur.fetchone()[0]
    cur.close()
    connection.close()
    return col

if __name__ == '__main__':
      app.run(host='0.0.0.0', port= int(service_port) )
