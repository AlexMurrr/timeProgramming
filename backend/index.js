const express = require("express");
const cors = require("cors");
const Router = require("./routes/routes.js"); 

const app = express(); 

app.use(express.json()); 

app.use(cors()); 

app.use(Router);
 
app.listen(5000, () => console.log('Server running at http://localhost:5000'));