const mysql = require('mysql2');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'AAAAAAA',
    database : 'foo'
  });

  connection.query("SELECT * FROM triangle;",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные    
});
connection.end();

  
