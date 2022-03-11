from datetime import datetime
from hashlib import md5
import time

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from flask import current_app
import jwt

from mahjong import db, login_manager
from mahjong.models.tweet import Tweet

followers = db.Table('followers',
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id')),
    db.Column('followed_id', db.Integer, db.ForeignKey('user.id'))
)

class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(64), unique = True, index = True)
    email = db.Column(db.String(64), unique = True, index = True)
    password_hash = db.Column(db.String(128))
    about_me = db.Column(db.String(120))
    create_time = db.Column(db.DateTime, default=datetime.utcnow)
    is_activated = db.Column(db.Boolean, default=False)
    permission = db.Column(db.String(8), default=None)

    tweets = db.relationship('Tweet', backref='author', lazy='dynamic')

    followed = db.relationship(
        'User', secondary=followers,
        primaryjoin=(followers.c.follower_id == id),
        secondaryjoin=(followers.c.followed_id == id),
        backref=db.backref('followers', lazy='dynamic'), lazy='dynamic'
        )

    def __repr__(self):
        return f'id={self.id}, username={self.username}, eamil={self.email}, permission={self.permission}'

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def avatar(self, size=80):
        md5_digest = md5(self.email.lower().encode('utf-8')).hexdigest()
        return f'https://picsum.photos/seed/{md5_digest}/{size}/{size}'

    def follow(self, user):
        if not self.is_following(user):
            self.followed.append(user)

    def unfollow(self, user):
        if self.is_following(user):
            self.followed.remove(user)

    def is_following(self, user):
        return self.followed.filter(
            followers.c.followed_id == user.id).count() > 0

    def own_and_followed_tweets(self):
        followed = Tweet.query.join(
            followers, (followers.c.followed_id == Tweet.user_id)).filter(
                followers.c.follower_id == self.id)
        own = Tweet.query.filter_by(user_id=self.id)
        return followed.union(own).order_by(Tweet.create_time.desc())

    def get_jwt(self, expire=7200):
        return jwt.encode(
            {
                'email': self.email,
                'exp' : time.time() + expire
            },
            current_app.config['SECRET_KEY'],
            algorithm='HS256'
        )

    @staticmethod
    def verify_jwt(token):
        try :
            email = jwt.decode(
                token,
                current_app.config['SECRET_KEY'],
                algorithms=['HS256']
            )
            email = email['email']
        except:
            return
        return User.query.filter_by(email=email).first()

@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))