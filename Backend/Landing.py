from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def landing_page():
    return render_template('landing.html')

@app.route('/search')
def search_page():
    return redirect(url_for('index')) #redirects to the search functionality

if __name__ == '__main__':
    app.run(debug=True)
