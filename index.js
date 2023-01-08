var express = require("express");
var app = express();
var db = require("./db.js")
const path = require('path');
const cors = require("cors");
const formateDate = require('./formatDate.js');

let getArrDate = formateDate.getArrDate;


const HTTP_PORT = 8080
app.use(cors());
app.listen(HTTP_PORT,() => {
    console.log("Server is listening on port " + HTTP_PORT)
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function (request, response) {
    response.sendFile(`${__dirname}/index.html`);
});

app.get("/add", (req, res, next) => {   
    const insert = 'INSERT INTO dateSpendTime(year, month, dateOfMonth, dayOfWeek, minutes) VALUES (?,?,?,?,?)'
    db.run(insert, getArrDate())

});

app.get('/chart', (req, res)=>{
    res.sendFile(`${__dirname}/public/charts.html`)
    
})

console.log(`${__dirname}/public/index.html`)

app.get("/result", (req, res, next) => {

  var sql = "select * from  dateSpendTime"
  var params = []
  db.all(sql, params, (err, rows) =>  {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
        })
    });  
});

console.log(getArrDate())








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



