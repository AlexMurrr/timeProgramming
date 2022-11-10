var express = require("express");
var app = express();
var db = require("./db.js")


const HTTP_PORT = 3000
app.listen(HTTP_PORT,() => {
    console.log("Server is listening on port " + HTTP_PORT)
});

app.get("/", (req, res, next) => {
    // var sql = "select * from timeSpend"
    // var params = []
    // db.all(sql, params, (err, rows) =>  {
    //     if (err) {
    //       res.status(400).json({"error":err.message});
    //       return;
    //     }
    //     res.json({
    //         "message":"success",
    //         "data":rows
    //     })
    //   });

    const insert = 'INSERT INTO timeSpend (timeMs, minuts) VALUES (?,?)'
    db.run(insert, [Date.now(), 30])

});


app.get("/result", (req, res, next) => {

  var sql = "select * from timeSpend"
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



