from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from os import path
from flask_login import LoginManager

db = SQLAlchemy()
DB_NAME = "database.db"


def create_app():
    app = Flask(__name__)
    app.config["SECRET_KEY"] = "asjdhbashbd"
    app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_NAME}"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JSON_SORT_KEYS"] = False

    db.init_app(app)

    from .views import views
    from .auth import auth
    from .notes import notes

    app.register_blueprint(views, url_prefix="/")
    app.register_blueprint(auth, url_prefix="/auth")
    app.register_blueprint(notes, url_prefix="/notes")

    from .models import Notes, User

    create_database(app)

    login_manager = LoginManager()
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(id):
        return User.query.get(int(id))

    return app


def create_database(app):
    if not path.exists(f"website/{DB_NAME}"):
        db.create_all(app=app)
        print("Database created !")
