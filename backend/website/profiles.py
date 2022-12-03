from flask import Blueprint, jsonify
from flask_login import current_user, login_required
import sqlite3 as sql
from .db_connection import DatabaseConnection

profile = Blueprint("profile", __name__)

db = DatabaseConnection()


@profile.route("/")
def home():
    _, curr = db.database_connection()
    curr.execute("SELECT * FROM problems")
    data = curr.fetchall()
    return f"{data}"
