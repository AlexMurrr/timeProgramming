const timingModels = require("../models/timingModels.js");

const  getTimeProg = timingModels.getTimeProg;

const showTime = (req, res) => {
    getTimeProg((err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}

module.exports = {showTime};