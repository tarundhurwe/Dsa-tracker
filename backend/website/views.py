from flask import Blueprint, jsonify
from flask_login import current_user
from .db_connection import DatabaseConnection
from constants.views_constant import ViewsObject

db = DatabaseConnection()
views_obj = ViewsObject()
views = Blueprint("views", __name__)

""" Views for problems """

""" Return list of names of available problem sets"""


@views.route("/")
def problem_sets():
    try:
        available_problem_sets = []
        _, cur = db.database_connection()
        cur.execute(views_obj.distinct_problem_sets)
        data = cur.fetchall()
        for i in range(len(data)):
            cur.execute(views_obj.problem_set_name.format(data[i][0]))
            num_questions = cur.fetchall()
            available_problem_sets.append(
                {"id": i + 1, "name": data[i][0], "total": len(num_questions)}
            )
        json_data = jsonify(available_problem_sets)
    except Exception as e:
        json_data = jsonify({"ERROR": f"Some error occurred {e}"})
    json_data.headers.add(views_obj.json_header, "*")
    return json_data


"""List of all problems"""


@views.route("/all")
def home():
    _, cur = db.database_connection()
    cur.execute(views_obj.all_problems)
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
    json_data = jsonify(problems)
    json_data.headers.add(views_obj.json_header, "*")
    return json_data


"""Returns list of sorted problems based on prolem set names and tags"""


@views.route("/<string:name>", defaults={"tag": None})
@views.route("/<string:name>/<string:tag>")
def sort_by_problem_set(name, tag):
    try:
        _, cur = db.database_connection()
        cur.execute(
            views_obj.selected_problem_set_with_tag.format(name.lower(), tag.title())
            if tag
            else views_obj.selected_problem_set.format(name.lower())
        )
        data = cur.fetchall()
        count = 1
        problems = []
        for ele in data:
            problems.append(
                {
                    "count": count,
                    "id": ele[0],
                    "problemset": ele[4],
                    "category": ele[1],
                    "problem": ele[2],
                    "link": ele[3],
                }
            )
            count += 1

        json_data = (
            jsonify(problems)
            if len(problems)
            else jsonify(
                {
                    "status": f"no data available for problemset {name}{f' and category {tag}' if tag else ''}"
                }
            )
        )
    except Exception as e:
        json_data = jsonify({"Error": f"Some error occurred {e}"})

    json_data.headers.add(views_obj.json_header, "*")
    return json_data
