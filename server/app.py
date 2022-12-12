from flask import Flask, request, jsonify, session
from flask_bcrypt import Bcrypt
from flask_cors import CORS, cross_origin
from flask_session import Session
from config import ApplicationConfig
from models import db, User, Feed
import json

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)
CORS(app, supports_credentials=True)
server_session = Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/@me")
def get_current_user():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    user = User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "username": user.username
    })

@app.route("/delete-post", methods=["DELETE"])
def delete_post():
    post_id = request.json["id"]
    post = Feed.query.filter_by(id=post_id).first()

    if post is None:
        return jsonify({
            "error": "Post não encontrado"
        })

    db.session.delete(post)
    db.session.commit()

    return jsonify({
        "post_id": post.id,
        "message": "Deletado com sucesso!"
    })

@app.route("/update-post", methods=["PUT"])
def update_post():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401

    post_id = request.json["id"]
    title = request.json["title"]
    hour = request.json["hour"]
    thumbnail = request.json["thumbnail"]

    post = Feed.query.filter_by(id=post_id).first()
    post.title = title
    post.hour = hour
    post.thumbnail = thumbnail

    db.session.add(post)
    db.session.commit()

    return jsonify({
                'type': 'Updated',
                'code': 200,
                'message': 'Publicação alterada com sucesso.'
            })

@app.route("/create-post", methods=["POST"])
def create_post():
    user_id = session.get("user_id")

    if not user_id:
        return jsonify({"error": "Unauthorized"}), 401
    
    title = request.json["title"]
    hour = request.json["hour"]
    thumbnail = request.json["thumbnail"]

    user = User.query.filter_by(id=user_id).first()

    new_post = Feed(username=user.username, title=title, hour=hour, thumbnail=thumbnail)
    db.session.add(new_post)
    db.session.commit()

    return jsonify({
        "id": new_post.id,
        "username": new_post.username,
        "title": new_post.title,
        "hour": new_post.hour,
        "thumbnail": new_post.thumbnail
    })

@app.route("/feed")
def feed():
    feed = Feed.query.all()
    results = [obj.to_dict() for obj in feed]
    jsdata = json.dumps({"results": results})
    context = json.loads(jsdata)
    results = context['results']

    return jsonify(results)

@app.route("/register", methods=["POST"])
def register_user():
    username = request.json["username"]
    password = request.json["password"]

    user_exists = User.query.filter_by(username=username).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"] = new_user.id

    return jsonify({
        "id": new_user.id,
        "username": new_user.username
    })

@app.route("/login", methods=["POST"])
def login_user():
    username = request.json["username"]
    password = request.json["password"]

    user = User.query.filter_by(username=username).first()

    if user is None:
        return jsonify({"error": "Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password, password):
        return jsonify({"error": "Unauthorized"}), 401
    
    session["user_id"] = user.id

    return jsonify({
        "id": user.id,
        "username": user.username
    })

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"

if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1')
