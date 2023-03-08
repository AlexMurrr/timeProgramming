const timingModels = require("../models/timingModels.js");
const ex = require('../../frontend/static/ex.js');
const path = require('path');

const  getTimeProg = timingModels.getTimeProg;
const timeNow = ex.getTime;

const showTime = (req, res) => {
    getTimeProg((err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}

const sendIndex = (req, res) => {
    res.sendFile('D:/myJS/Timing/frontend/static/index.html');
    console.log(path.resolve('../frontend/static/', 'index.html'));
}



module.exports = {showTime, sendIndex};