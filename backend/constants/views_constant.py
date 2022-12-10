class ViewsObject:
    """Queries"""

    distinct_problem_sets = """SELECT DISTINCT problem_set_name FROM problems"""
    problem_set_name = "SELECT * FROM problems WHERE problem_set_name = '{}'"

    all_problems = """SELECT * FROM problems"""

    selected_problem_set = "SELECT * FROM problems WHERE problem_set_name = '{}'"
    selected_problem_set_with_tag = (
        "SELECT * FROM problems WHERE problem_set_name = '{}' and tag = '{}'"
    )

    """Json header"""
    json_header = "Access-Control-Allow-Origin"
