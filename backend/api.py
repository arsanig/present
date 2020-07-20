from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return 'Some splash screen to be added here'

@app.route('/login')
def login():
    return 'This should be where you can login'