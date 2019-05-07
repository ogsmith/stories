import os
import cx_Oracle
from flask import Flask

db_user = 'opc'
db_password = 'x'
db_connect = '129.156.113.135'

app = Flask(__name__)

@app.route('/')
def index():
    connection = cx_Oracle.connect(db_user, db_password, db_connect)
    # conn_str = u'opc/R@nger2211@129.156.113.135:1521'
    conn = cx_Oracle.connect(conn_str)

    cur = connection.cursor()
    # cur.execute("SELECT * FROM mydb")
    # col = cur.fetchone()[0]
    cur.close()
    connection.close()
    return "hi"

if __name__ == '__main__':
      app.run()
