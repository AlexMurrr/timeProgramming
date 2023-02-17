import db from "../config/db.js";

export const getTimeProg = (result) => {
    var sql =
    "SELECT * FROM musicTime";   
    db.all(sql,[], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}
