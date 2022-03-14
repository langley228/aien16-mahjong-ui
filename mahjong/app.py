from flask import Flask, url_for, redirect, render_template, request
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route("/")
def index():
    # get in from request url
    inIds = request.args.get('inIds')
    outIds = request.args.get('outIds')
    lastId = request.args.get('lastId')

    # get the data we need
    if isinstance(inIds,str):
        inIds = getIds(inIds)
    if isinstance(outIds,str):
        outIds = getIds(outIds)
    if isinstance(lastId,str):
        lastId = getIds(lastId)

    return render_template(
        'index.html', inIds=inIds, outIds=outIds, lastId=lastId
    )

def getIds(ids):
    # split ids string into list, and transform it into int
    ids = ids.split(',')

    # sort
    ids.sort()
    ids = ",".join(ids)

    return ids