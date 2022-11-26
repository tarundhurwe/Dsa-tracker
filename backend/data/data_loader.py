from os.path import join, dirname
import json
import sqlite3 as sql


def load_data(path, dataset_name):
    file = open(join(dirname(__file__), path))
    json_data = json.load(file)
    data = json_data["data"]
    connection = sql.connect(join(dirname(__file__), "../website/database.db"))
    c = connection.cursor()
    c.execute("""SELECT id FROM problems where id = (select max(id) from problems);""")
    try:
        start = c.fetchall()[0][0] + 1
    except:
        start = 1
    for i in range(len(data)):
        try:
            id = i + start
            tag = data[i]["category"]
            problem_statement = data[i]["name"]
            problem_link = data[i]["link"]
            try:
                c.execute(
                    """INSERT INTO problems VALUES(?,?,?,?,?)""",
                    (id, tag, problem_statement, problem_link, dataset_name),
                )
                connection.commit()
                print(f"{data[i]} inserted successfully in database")
            except Exception as e:
                print(f"Error : {e}")
        except Exception as e:
            print(f"Error: {e}")
    connection.close()
    file.close()


if __name__ == "__main__":
    file_name = input("File Name : ")
    path = join(dirname(__file__), f"{file_name}")
    dataset_name = input("Name : ")
    load_data(path, dataset_name)
