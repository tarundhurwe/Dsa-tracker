from flask import Blueprint, jsonify
from flask_login import current_user
import sqlite3 as sql
from os.path import join, dirname
from .db_connection import DatabaseConnection

views = Blueprint("views", __name__)


db = DatabaseConnection()
""" Views for problems """

""" Return list of names of available problem sets"""


@views.route("/")
def problem_sets():
    try:
        available_problem_sets = []
        _, curr = db.database_connection()
        curr.execute("""SELECT DISTINCT problem_set_name FROM problems""")
        data = curr.fetchall()
        for i in range(len(data)):
            query = f"SELECT * FROM problems WHERE problem_set_name = '{data[i][0]}'"
            curr.execute(query)
            num_questions = curr.fetchall()
            available_problem_sets.append(
                {"id": i + 1, "name": data[i][0], "total": len(num_questions)}
            )
        json_data = jsonify(available_problem_sets)
    except Exception as e:
        json_data = jsonify({"ERROR": "Some error occurred"})
    json_data.headers.add("Access-Control-Allow-Origin", "*")
    return json_data


"""List of all problems"""


@views.route("/all")
def home():
    _, cur = db.database_connection()
    cur.execute("""SELECT * FROM problems""")
    data = cur.fetchall()
    print(data[0])
    problems = [
        {
            "id": ele[0],
            "problemset": ele[4],
            "category": ele[1],
            "problem": ele[2],
            "link": ele[3],
        }
        for ele in data
    ]
    json_data = jsonify(problems)
    json_data.headers.add("Access-Control-Allow-Origin", "*")
    return json_data


"""Returns list of sorted problems based on prolem set names and tags"""


@views.route("/<string:name>", defaults={"tag": None})
@views.route("/<string:name>/<string:tag>")
def sort_by_problem_set(name, tag):
    try:
        if not current_user.is_authenticated:
            return jsonify(
                {
                    "Unauthorized": "The server could not verify that you are authorized to access the URL requested. You either supplied the wrong credentials (e.g. a bad password), or your browser doesn't understand how to supply the credentials required."
                }
            )

        name = name.lower()
        if tag:
            tag = tag.title()
            query = f"SELECT * FROM problems WHERE problem_set_name = '{name}' and tag = '{tag}'"
        else:
            query = f"SELECT * FROM problems WHERE problem_set_name = '{name}'"

        _, cur = db.database_connection()
        cur.execute(query)
        data = cur.fetchall()
        problems = [
            {
                "id": ele[0],
                "problemset": ele[4],
                "category": ele[1],
                "problem": ele[2],
                "link": ele[3],
            }
            for ele in data
        ]

        return (
            jsonify(problems)
            if len(problems)
            else jsonify(
                {
                    "status": f"no data available for problemset {name}{f' and category {tag}' if tag else ''}"
                }
            )
        )
    except Exception as e:
        return jsonify({"Error": e})
