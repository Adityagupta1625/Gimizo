from flask import Flask, render_template, request, redirect
from boto3 import session
from boto3.s3.transfer import S3Transfer
import mysql.connector
from datetime import datetime
import random
from flask_mysqldb import MySQL
import os
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__, template_folder='template')

# loading from env file

conn=mysql.connector.connect(
    host=os.environ.get('HOST'),
    database=os.environ.get('DATABASE'),
    user=os.environ.get('USER'),
    password=os.environ.get('PASSWORD')
)

cursor = conn.cursor(buffered=True)

@app.route('/')
def index():
    
    category = 'Popular'
    cursor.execute(
        '''SELECT * from games where category=%s ''', (category,))

    result = cursor.fetchall()
    result=random.sample(result,len(result))

    print(result)
    cursor.execute('''SELECT DISTINCT category from games''')
    a = cursor.fetchall()

    a=sorted(a)
    conn.commit()
    
    return render_template('index.html', list=result, cat=a)


@app.route('/<string:cat>')
def index1(cat):
    
    cursor.execute('''SELECT * from games WHERE category=%s''', (cat,))
    result = cursor.fetchall()
    result=random.sample(result,len(result))

    cursor.execute('''SELECT DISTINCT category from games''')
    a = cursor.fetchall()

    a=sorted(a)

    if not cat == 'Popular':
        category = 'Popular'
        cursor.execute(
            '''SELECT * from games where category=%s ''', (category,))
        result1 = cursor.fetchall()
        result1=random.sample(result1,len(result1))
        for i in result1:
            result.append(i)
        
        conn.commit()
        
    return render_template('index.html', cat=a, list=result)


@app.route('/share/<string:sharestr>')
def sharepage(sharestr):
    
    category = ''
    gamename = ''

    i = 0
    while sharestr[i] != '_':
        category = category+sharestr[i]
        i = i+1

    i = i+1
    while i < len(sharestr):
        gamename = gamename+sharestr[i]
        i = i+1

    cursor.execute(
        '''SELECT * from games WHERE category=%s and gamename=%s''', (category, gamename))

    sp = cursor.fetchall()

    cursor.execute('''SELECT DISTINCT category from games''')
    a = cursor.fetchall()

    a=sorted(a)

    category = 'Popular'
    cursor.execute(
        '''SELECT * from gamesdata where category=%s and gamename!=%s ''', (category, gamename))
    result = cursor.fetchall()

    result=random.sample(result,len(result))
    
    
    return render_template('share-hidden.html', sp=sp, cat=a, list=result)


@app.route('/contact')
def contact():
    return render_template('contact.html')


@app.route('/about')
def about():
    return render_template('About-us.html')


@app.route('/privacy')
def privacy():
    return render_template('privacy-policy.html')


@app.route('/terms')
def terms():
    return render_template('terms.html')


@app.route('/report', methods=['GET', 'POST'])
def report():
    cursor = mysql.connection.cursor()
    if request.method == "POST":
        option = request.form['report']
        gamename = request.form['gamename']
        category = request.form['category']

    now = datetime.now()
    formatted_date = now.strftime('%Y-%m-%d %H:%M:%S')

    cursor.execute('''INSERT INTO report(Gamename,Issue,reportdate) VALUES(%s,%s,%s)''',
                   (gamename, option, formatted_date))

    mysql.connection.commit()
    cursor.close()
    return redirect('/')


# @app.route('/newgames')
# def newgame():
#     cursor = mysql.connection.cursor()
#     cursor.execute('''SELECT * from new_table''')

#     result = cursor.fetchall()
#     cursor.execute('''SELECT DISTINCT category from gamesdata''')
#     a = cursor.fetchall()

#     a=sorted(a)
#     mysql.connection.commit()
#     cursor.close()
#     return render_template('newGames.html', list=result, cat=a)


if __name__ == '__main__':
    app.run(debug=True, port=8000)
