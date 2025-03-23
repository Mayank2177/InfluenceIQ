from flask import Flask, render_template, request, redirect, url_for, jsonify
import sqlite3
import hashlib
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
UPLOAD_FOLDER = 'static/profile_pics' # Create a folder named static and then profile_pics inside of that.
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Database setup
def create_table():
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            name TEXT,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            profile_picture TEXT
        )
    ''')
    conn.commit()
    conn.close()

create_table()

def hash_password(password):
    return hashlib.sha256(password.encode()).hexdigest()

# Route to display the user profile
@app.route('/profile/<username>', methods=['GET', 'POST'])
def profile(username):
    conn = sqlite3.connect('users.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM users WHERE username = ?', (username,))
    user = cursor.fetchone()
    conn.close()

    if user:
        if request.method == 'POST':
            name = request.form['name']
            email = request.form['email']
            password = request.form['password']
            hashed_password = hash_password(password)

            if 'profile_picture' in request.files:
                file = request.files['profile_picture']
                if file and allowed_file(file.filename):
                    filename = secure_filename(file.filename)
                    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                    profile_picture = filename
                else:
                    profile_picture = user[5] #keep the old one if invalid file.
            else:
                profile_picture = user[5] #Keep the old one if no file uploaded.

            conn = sqlite3.connect('users.db')
            cursor = conn.cursor()
            cursor.execute('''
                UPDATE users
                SET name = ?, email = ?, password = ?, profile_picture = ?
                WHERE username = ?
            ''', (name, email, hashed_password, profile_picture, username))
            conn.commit()
            conn.close()
            return redirect(url_for('profile', username=username))

        return render_template('profile.html', user=user)
    else:
        return 'User not found', 404

if __name__ == '__main__':
    app.run(debug=True)
