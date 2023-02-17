import {getTimeProg} from "../models/timingModels.js";

export const showTime = (req, res) => {
    getTimeProg((err, results) => {
        if(err){
            res.send(err)
        }else{
            res.json(results);
        }
    })
}