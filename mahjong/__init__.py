from flask import Flask, url_for, redirect, render_template, flash, abort, session, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager, login_user, logout_user, login_required, current_user

# flask init
app = Flask(__name__)

# config init
from mahjong.config import Config
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
from mahjong.forms import LoginForm, RegisterFrom


@app.route('/')
def index():    
    return render_template('index.html')


@app.route("/ans")
@login_required
def ans():
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
        'ans.html', inIds=inIds, outIds=outIds, lastId=lastId
    )

def getIds(ids):
    # split ids string into list, and transform it into int
    ids = ids.split(',')

    # sort
    ids.sort()
    ids = ",".join(ids)

    return ids

@app.route("/register", methods=['GET', 'POST'])
def register():
    # check current user's status
    if current_user.is_authenticated:
        return redirect(url_for('ans'))

    # register form
    form = RegisterFrom()
    if form.validate_on_submit():
        user = User(username=form.username.data, email = form.email.data)
        user.set_password(form.password.data)
        db.session.add(user)
        db.session.commit()
        return redirect(url_for('login'))
    return render_template('register.html', title='Registration', form=form)

@app.route("/login", methods=['GET', 'POST'])
def login():
    if current_user.is_authenticated:
        return redirect(url_for('ans'))

    # get certain aurgument from request url
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

    form = LoginForm(meta={'csrf': False})
    if form.validate_on_submit():
        u = User.query.filter_by(username=form.username.data).first()
        if u is None or not u.check_password(form.password.data):
            flash('invalid username or password')
            return redirect(url_for('login'))
        login_user(u)
        return redirect(url_for('ans', inIds=inIds, outIds=outIds, lastId=lastId))

    return render_template('login.html', title="Login", form=form
    )


@app.route("/logout", methods=['GET', 'POST'])
@login_required
def logout():
    for key in list(session.keys()):
        session.pop(key)
    session.pop("userinfo", None)
    logout_user()
    return redirect(url_for('login'))


@app.route("/<username>", methods=['GET', 'POST'])
@login_required
def profile(username):
    # get current user as u
    u = User.query.filter_by(username=username).first()

    # check whether current user is available
    if u is None:
        abort(404)
    
    return render_template(
        'profile.html',
        title='Profile',
        user=u
    )

if __name__ == '__main__' :
    app.run()