from flask import Blueprint, jsonify
from flask_login import current_user, login_required
import sqlite3 as sql
from os.path import join, dirname
from .db_connection import DatabaseConnection

db = DatabaseConnection()
notes = Blueprint("notes", __name__)


@notes.route("/")
def home():
    return "working"
