const mysql = require('mysql2');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'AAAAAAA',
    database : 'timeprogramming'
  });   

//   connection.query("SELECT * FROM ;",
//   function(err, results, fields) {
//     console.log(err);
//     console.log(results); // собственно данные    
// });
// connection.end();

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
  }); 

//console.log(nowMiliSeconds);

let nowMiliSeconds = Date.now();
  
const sql = 'INSERT INTO time (timestamp) VALUES(?)';

connection.query(sql, [nowMiliSeconds], (err, res)=>{
    if(err) console.log(err.message);
    console.log('Add successfull');
})