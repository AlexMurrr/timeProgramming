const timingModels = require("../models/timingModels.js");
const path = require('path');

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

const sendIndex = (req, res) => {
    res.sendFile('index.html');   
}



module.exports = {showTime, sendIndex};