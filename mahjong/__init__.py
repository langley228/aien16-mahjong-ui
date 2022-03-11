from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager
from flask_mail import Mail
from authlib.integrations.flask_client import OAuth

from mahjong.config import Config

db = SQLAlchemy()
migrate = Migrate()
login_manager = LoginManager()
login_manager.login_view = 'login'
mail = Mail()

oauth = OAuth()
google = oauth.register(
    name='google',
    client_id=Config.GOOGLE_CLIENT_ID,
    client_secret=Config.GOOGLE_CLIENT_SECRET,
    access_token_url='https://accounts.google.com/o/oauth2/token',
    access_token_params=None,
    authorize_url='https://accounts.google.com/o/oauth2/auth',
    authorize_params=None,
    api_base_url='https://www.googleapis.com/oauth2/v1/',
    userinfo_endpoint='https://openidconnect.googleapis.com/v1/userinfo',  # This is only needed if using openId to fetch user info
    client_kwargs={'scope': 'openid email profile'},
)

from mahjong.route import index, login, logout, password_reset, register, reset_password_request, user, \
    page_not_found, edit_profile, reset_password_request, explore, user_activate, countTweets, google_authorize, delete

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    migrate.init_app(app, db)
    login_manager.init_app(app)
    mail.init_app(app)
    oauth.init_app(app)

    # url route definition
    app.add_url_rule('/index',
        endpoint='index',
        view_func=index,
        methods=['GET', 'POST']
    )
    app.add_url_rule('/delete/<int:id>',
        endpoint='delete',
        view_func=delete,
        methods=['GET', 'POST']
    )
    app.add_url_rule('/',
        endpoint='index', 
        view_func=index,
        methods=['GET', 'POST']
    )
    app.add_url_rule('/login', 
        endpoint='login', 
        view_func=login, 
        methods=['GET', 'POST']
    )
    app.add_url_rule('/logout', 
        endpoint='logout', 
        view_func=logout
    )
    app.add_url_rule('/register', 
        endpoint='register', 
        view_func=register, 
        methods=['GET', 'POST']
    )
    app.add_url_rule('/<username>', 
        endpoint='profile', 
        view_func=user, 
        methods=['GET', 'POST']
    )
    app.add_url_rule('/edit_profile',
        endpoint='edit_profile', 
        view_func=edit_profile,
        methods=['GET', 'POST']
    ) 

    app.add_url_rule(
        '/reset_password_request',
        endpoint='reset_password_request',
        view_func=reset_password_request,
        methods=['GET', 'POST']
    )
    app.add_url_rule(
        '/password_reset/<token>',
        endpoint='password_reset',
        view_func=password_reset,
        methods=['GET', 'POST']
    )
    app.add_url_rule('/explore', 
        endpoint='explore', 
        view_func=explore, 
        methods=['GET', 'POST']
    )
    app.add_url_rule('/activate/<token>', 
        endpoint='user_activate', 
        view_func=user_activate
    )
    app.add_url_rule('/countTweets', 
        endpoint='countTweets', 
        view_func=countTweets, 
        methods=['POST']
    )
    app.add_url_rule('/google_authorize', 
        endpoint='google_authorize', 
        view_func=google_authorize
    )

    app.register_error_handler(404, page_not_found)
    return app
    