const express = require("express");
const cors = require("cors");
const path = require('path');
const Router = require("./routes/routes.js"); 

const app = express(); 

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(express.json()); 

app.use(cors()); 

app.use(Router);



app.get('/time', (req, res) => {
   // res.sendFile(path.resolve(__dirname, 'public/index.html'));
    console.log(path.resolve(__dirname, 'public'));
})
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));


