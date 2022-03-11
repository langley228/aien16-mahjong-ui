from datetime import datetime, timedelta

from mahjong import db

class Tweet(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.String(140))
    create_time = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))

    def __repr__(self):
        return f"id={self.id}, body={self.body}, create_time={self.create_time}, user_id={self.user_id}"
        
    def getTaiwanTime(self):
        return self.create_time + timedelta(hours=8)