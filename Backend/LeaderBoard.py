from flask import Flask, render_template, jsonify
import requests
from bs4 import BeautifulSoup
import re
import nltk

nltk.download('punkt')

app = Flask(__name__)

# Credibility calculation function (from previous example)
def calculate_personality_credibility(name):
    try:
        # Code from your colab notebook
        search_results = requests.get(f"https://www.google.com/search?q={name}")
        soup = BeautifulSoup(search_results.text, "html.parser")
        results = soup.find_all("div", class_="yuRUbf")
        num_results = len(results)

        wiki_results = requests.get(f"https://en.wikipedia.org/wiki/{name}")
        wiki_soup = BeautifulSoup(wiki_results.text, "html.parser")
        wiki_text = wiki_soup.get_text()

        keywords = ["controversy", "scandal", "fraud", "allegation", "lawsuit", "dispute", "misconduct", "criminal", "false", "lie", "untrue", "fake", "hoax", "conspiracy", "rumor", "deception", "manipulation", "biased", "propaganda", "slander", "libel", "defamation", "plagiarism", "misinformation", "disinformation", "inaccurate", "unreliable", "unverified", "debunked", "refuted", "challenged", "questioned"]

        score = 0
        for keyword in keywords:
            if re.search(keyword, wiki_text, re.IGNORECASE):
                score += 1

        credibility_score = (num_results / 10) - score
        return credibility_score
    except Exception as e:
        print(f"Error calculating credibility: {e}")
        return "Error"

# Sample celebrity data (replace with your data source)
celebrities = [
    {"name": "Elon Musk", "score": 0},
    {"name": "Taylor Swift", "score": 0},
    {"name": "Lebron James", "score": 0},
    {"name": "Billie Eilish", "score": 0},
]

@app.route('/leaderboard')
def leaderboard():
    for celebrity in celebrities:
        celebrity['score'] = calculate_personality_credibility(celebrity['name'])
    sorted_celebrities = sorted(celebrities, key=lambda x: x['score'], reverse=True)
    return render_template('leaderboard.html', celebrities=sorted_celebrities)

@app.route('/api/leaderboard')
def leaderboard_api():
    for celebrity in celebrities:
        celebrity['score'] = calculate_personality_credibility(celebrity['name'])
    sorted_celebrities = sorted(celebrities, key=lambda x: x['score'], reverse=True)
    return jsonify(sorted_celebrities)

if __name__ == '__main__':
    app.run(debug=True)
