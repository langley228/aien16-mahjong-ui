from datetime import datetime
from hashlib import md5

from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

from mahjong import db, login_manager


class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(64), unique = True, index = True)
    email = db.Column(db.String(64), unique = True, index = True)
    password_hash = db.Column(db.String(128))
    create_time = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'id={self.id}, username={self.username}, eamil={self.email}, permission={self.permission}'

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password_hash, password)

    def avatar(self, size=80):
        md5_digest = md5(self.email.lower().encode('utf-8')).hexdigest()
        return f'https://picsum.photos/seed/{md5_digest}/{size}/{size}'

@login_manager.user_loader
def load_user(id):
    return User.query.get(int(id))