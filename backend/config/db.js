import sqlite3 from "sqlite3";

const dataSource = "timeOfProg.db";

const db = new sqlite3.Database(dataSource, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});

export default db;