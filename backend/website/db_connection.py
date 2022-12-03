import sqlite3 as sql
from os.path import join, dirname


class DatabaseConnection:
    def __init__(self) -> None:
        self.path = join(dirname(__file__), "database.db")

    def database_connection(self):
        connection = sql.connect(self.path)
        cursor = connection.cursor()
        return connection, cursor
