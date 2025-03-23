from flask import Flask, render_template, request
import requests
from bs4 import BeautifulSoup
import re
import nltk

nltk.download('punkt')

app = Flask(__name__)

def calculate_credibility(name):
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

@app.route('/', methods=['GET', 'POST'])
def index():
    info = None
    credibility = None
    if request.method == 'POST':
        name = request.form['name']
        info = f"Information about {name} will be displayed here." # Placeholder for information retrieval.
        credibility = calculate_credibility(name)

    return render_template('index.html', info=info, credibility=credibility)

if __name__ == '__main__':
    app.run(debug=True)
