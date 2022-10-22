const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('timeOfProg.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the mock database.');
  });

// const sql = `INSERT INTO users('firstName', 'lastname', 'id')
//               VALUES (?,?,?)`;
// db.run(sql, ['alex', 'mur', 1], (err)=>{
//   if(err) console.log(err.message);
// })

const sql = `SELECT * FROM users`;

db.all(sql, [], (err, rows)=>{
  if(err) return console.log(err.message);
  rows.forEach((row)=>{
    console.log(row);
  });
});

db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
    console.log('Close the database connection.');
  });

  
