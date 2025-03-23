from flask import Flask, render_template, jsonify
import sqlite3
import datetime

app = Flask(__name__)

# Database setup (using SQLite for simplicity, consider a more robust DB for production)
def create_tables():
    conn = sqlite3.connect('user_data.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            signup_date DATE NOT NULL
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS activity (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            user_id INTEGER NOT NULL,
            activity_date DATE NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    ''')
    conn.commit()
    conn.close()

create_tables()

# Metric Calculation Functions
def get_user_count():
    conn = sqlite3.connect('user_data.db')
    cursor = conn.cursor()
    cursor.execute('SELECT COUNT(*) FROM users')
    count = cursor.fetchone()[0]
    conn.close()
    return count

def get_active_user_count(days=30):
    conn = sqlite3.connect('user_data.db')
    cursor = conn.cursor()
    cutoff_date = datetime.date.today() - datetime.timedelta(days=days)
    cursor.execute('SELECT COUNT(DISTINCT user_id) FROM activity WHERE activity_date >= ?', (cutoff_date,))
    count = cursor.fetchone()[0]
    conn.close()
    return count

def get_new_user_count(days=30):
    conn = sqlite3.connect('user_data.db')
    cursor = conn.cursor()
    cutoff_date = datetime.date.today() - datetime.timedelta(days=days)
    cursor.execute('SELECT COUNT(*) FROM users WHERE signup_date >= ?', (cutoff_date,))
    count = cursor.fetchone()[0]
    conn.close()
    return count

def get_retention_rate(days=30):
    conn = sqlite3.connect('user_data.db')
    cursor = conn.cursor()
    cutoff_date = datetime.date.today() - datetime.timedelta(days=days)
    cursor.execute('''
        SELECT COUNT(DISTINCT a.user_id)
        FROM activity a
        JOIN users u ON a.user_id = u.id
        WHERE a.activity_date >= ?
        AND u.signup_date <= ?
    ''', (cutoff_date, cutoff_date))
    retained_users = cursor.fetchone()[0]
    total_users = get_user_count()
    conn.close()
    if total_users == 0:
        return 0
    return (retained_users / total_users) * 100

# API Endpoint
@app.route('/api/metrics')
def get_metrics():
    user_count = get_user_count()
    active_users = get_active_user_count()
    new_users = get_new_user_count()
    retention_rate = get_retention_rate()

    metrics = {
        'user_count': user_count,
        'active_users': active_users,
        'new_users': new_users,
        'retention_rate': retention_rate
    }
    return jsonify(metrics)

# HTML Template (templates/metrics.html)
@app.route('/metrics')
def show_metrics():
    user_count = get_user_count()
    active_users = get_active_user_count()
    new_users = get_new_user_count()
    retention_rate = get_retention_rate()

    return render_template('metrics.html', user_count=user_count, active_users=active_users, new_users=new_users, retention_rate=retention_rate)

if __name__ == '__main__':
    app.run(debug=True)
