var express = require("express");
var app = express();
var db = require("./db.js")
const path = require('path');


const HTTP_PORT = 3000
app.listen(HTTP_PORT,() => {
    console.log("Server is listening on port " + HTTP_PORT)
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function (request, response) {
    response.sendFile(`${__dirname}/public/index.html`);
});

app.get("/add", (req, res, next) => {   
    const insert = 'INSERT INTO timeSpend (timeMs, minuts) VALUES (?,?)'
    db.run(insert, [Date.now(), 30])

});

app.get('/chart', (req, res)=>{
    res.sendFile('D:/myJS/Timing/public/charts.html')
})

console.log(`${__dirname}/public/index.html)`)

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



