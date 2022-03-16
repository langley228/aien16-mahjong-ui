from flask import Flask, url_for, redirect, render_template, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from mahjong.config import Config



# flask init
app = Flask(__name__)

# config init
app.config.from_object(Config)

# database init
db = SQLAlchemy()
db.init_app(app)

# migrate init
migrate = Migrate()
migrate.init_app(app, db)

# Flask-Login init
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

from mahjong.models.user import User, load_user

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

if __name__ == '__main__' :
    app.run()