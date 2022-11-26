from . import db
from flask_login import UserMixin
from sqlalchemy import func


class Problems(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tag = db.Column(db.String(150))
    problem_statement = db.Column(db.String(150))
    problem_link = db.Column(db.String(150))
    problem_set_name = db.Column(db.Text)


class Notes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    problem_id = db.Column(db.Integer, db.ForeignKey("problems.id"))
    tag = db.Column(db.String(150), db.ForeignKey("problems.tag"))
    problem_statement = db.Column(db.Text, db.ForeignKey("problems.problem_statement"))
    problem_link = db.Column(db.Text, db.ForeignKey("problems.problem_link"))
    date = db.Column(db.DateTime(timezone=True), default=func.now())
    data = db.Column(db.Text)
    status = db.Column(db.Boolean, default=False)


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True, nullable=False)
    password = db.Column(db.String(150), nullable=False)
    first_name = db.Column(db.String(150), nullable=False)
    last_name = db.Column(db.String(150), nullable=False)
    notes = db.relationship("Notes")
