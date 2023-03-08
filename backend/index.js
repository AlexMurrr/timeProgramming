const express = require("express");
const cors = require("cors");
const path = require('path');
const Router = require("./routes/routes.js"); 
const ex = require('../frontend/static/ex.js');

const app = express(); 

const timeNow = ex.getTime; 

app.use(express.static(path.resolve(__dirname, 'frontend/static')));

app.use(timeNow);

app.use(express.json()); 

app.use(cors()); 

app.use(Router);

app.get('/time', (req, res) => {
    res.send('<h1>eeeeeeqqqq</h1>');
})
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));


