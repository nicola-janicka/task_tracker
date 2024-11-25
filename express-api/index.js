const express = require("express");
const app = express();
const port = 3001;
const pgp = require("pg-promise")(); // require podoobne do import
const db = pgp("postgres://postgres@localhost:5432/task_tracker");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/tasks", (req, res) => {
  db.manyOrNone("SELECT * FROM tasks")
    .then((data) => {
      let response;
      data.map((row, index, data) => {
        response = data;

        console.log(row, index, data);
      });
      res.json(response);
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

db.one("SELECT $1 AS value", 123) // one - pobieramy jedna rzecz z bazy danych
  .then((data) => {
    console.log("DATA:", data.value);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });
