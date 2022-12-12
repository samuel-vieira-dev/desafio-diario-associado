from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(32), primary_key=True, unique=True, default=get_uuid)
    username = db.Column(db.String(345))
    password = db.Column(db.Text, nullable=False)

class Feed(db.Model):
    __tablename__ = "feed"
    id = db.Column(db.String(32), primary_key=True, unique=False, default=get_uuid)
    username = db.Column(db.String(345))
    title = db.Column(db.String(345))
    hour = db.Column(db.String(5))
    thumbnail = db.Column(db.String(500))

    def to_dict(self):
        return {"username": self.username, "title": self.title, "hour": self.hour, "thumbnail": self.thumbnail, "id": self.id}
