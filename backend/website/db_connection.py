import sqlite3 as sql
from os.path import join, dirname
from constants.db_constants import DatabaseObjects


class DatabaseConnection:
    def __init__(self) -> None:
        self.database = DatabaseObjects()
        self.path = join(dirname(__file__), self.database.database_name)

    def database_connection(self):
        connection = sql.connect(self.path)
        cursor = connection.cursor()
        return connection, cursor
