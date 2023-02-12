var express = require("express");
var app = express();
var db = require("./db.js");
const path = require("path");
const cors = require("cors");
const formateDate = require("./formatDate.js");

let getArrDate = formateDate.getArrDate;

const HTTP_PORT = 8080;
app.use(cors());
app.listen(HTTP_PORT, () => {
  console.log("Server is listening on port " + HTTP_PORT);
});

app.use(express.static(path.join(__dirname, "public")));

const urlencodedParser = express.urlencoded({ extended: false });

app.get("/", function (request, response) {
  response.sendFile(`${__dirname}/index.html`);
});

app.get("/add", (req, res, next) => {
  const insert =
    "INSERT INTO dateSpendTime(year, month, dateOfMonth, dayOfWeek, minutes) VALUES (?,?,?,?,?)";
  db.run(insert, getArrDate(30));
  res.sendFile(`${__dirname}/index.html`);
});

app.get("/chart", (req, res) => {
  res.sendFile(`${__dirname}/public/charts.html`);
});

console.log(`${__dirname}/public/index.html`);

app.get("/result", (req, res, next) => {
  var sql =
    "SELECT dateOfMonth, SUM(minutes) AS countminutes FROM dateSpendTime group by dateOfMonth";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.get("/countMusic", (req, res, next) => {
  var sql =
    "SELECT dateOfMonth, SUM(minutes) AS countminutes FROM musicTime group by dateOfMonth";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.post("/", urlencodedParser, function (request, response) {
  const insert =
    "INSERT INTO musicTime(year, month, dateOfMonth, dayOfWeek, minutes) VALUES (?,?,?,?,?)";
  db.run(insert, getArrDate(request.body.musicTime));
  response.sendFile(`${__dirname}/index.html`);
});


//const mysql = require('mysql2');

// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'AAAAAAA',
//     database : 'timeprogramming'
//   });

// let nowMiliSeconds = Date.now();

// const sql = 'INSERT INTO time (timestamp) VALUES(?)';

// function queryInsert(){
// connection.connect((err) => {
//     if (err) throw err;
//     console.log('Connected to MySQL Server!');
//   });
// connection.query(sql, nowMiliSeconds, (err, res)=>{
//     if(err) console.log(err.message);
//     console.log('Add successfull');
// })}
