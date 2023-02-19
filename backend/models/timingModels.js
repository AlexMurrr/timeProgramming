const db = require("../config/db.js");

const getTimeProg = (result) => {
    var sql =
    "SELECT dateOfMonth, SUM(minutes) AS countminutes FROM dateSpendTime group by dateOfMonth";   
    db.all(sql,[], (err, results) => {
        if (err) {
            console.log(err);
            result(err, null);
        }else{
            result(null, results);
        }
    });
}

module.exports = {getTimeProg};