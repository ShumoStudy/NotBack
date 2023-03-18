from flask import Flask, render_template, request, redirect
import json

app = Flask(__name__)

WORDS_FILE = 'words.json'


def get_words():
    try:
        with open(WORDS_FILE, 'r') as f:
            words = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        words = []
    return words


def save_words(words):
    with open(WORDS_FILE, 'w') as f:
        json.dump(words, f)


@app.route('/')
def index():
    words = get_words()
    return render_template('index.html', words=words)


@app.route('/add', methods=['POST'])
def add_word():
    word = request.form['word']
    words = get_words()
    words.append(word)
    save_words(words)
    return redirect('/')


@app.route('/list')
def list_words():
    words = get_words()
    return render_template('list.html', words=words)


if __name__ == '__main__':
    app.run(debug=True)
