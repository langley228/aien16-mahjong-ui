from flask import Flask, url_for, redirect, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route("/")
def index():
    return render_template(
        'index.html'
    )

def idx2dataID(inputs):
    dictionary = {
        0 : 10,
        1 : 11,
        2 : 12,
        3 : 13,
        4 : 14,
        5 : 15,
        6 : 16,
        7 : 17,
        8 : 18,
        9 : 1,
        10 : 2,
        11 : 3,
        12 : 4,
        13 : 5,
        14 : 6,
        15 : 7,
        16 : 8,
        17 : 9,
        18 : 19,
        19 : 20,
        20 : 21,
        21 : 22,
        22 : 23,
        23 : 24,
        24 : 25,
        25 : 26,
        26 : 27,
        27 : 28,
        28 : 29,
        29 : 30,
        30 : 31,
        31 : 32,
        32 : 33,
        33 : 34,
        34 : 35,
        35 : 36,
        36 : 37,
        37 : 38,
        38 : 39,
        39 : 40,
        40 : 41,
        41 : 42,
    }
    for input in inputs:
        output = dictionary[input]
    return output