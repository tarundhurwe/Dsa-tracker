from flask import Blueprint, jsonify
from flask_login import current_user, login_required
import sqlite3 as sql
from os.path import join, dirname

notes = Blueprint("notes", __name__)


def get_db():
    conn = sql.connect(join(dirname(__file__), "database.db"))
    cur = conn.cursor()
    return conn, cur


@notes.route("/")
def home():
    return "working"
