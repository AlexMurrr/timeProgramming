function getTime (req, res, next){
    req.reqTime = Date.now();
    next();
}

module.exports={getTime}