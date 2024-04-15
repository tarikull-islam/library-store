const express = require("express");
const app = express();
const PORT = 8001;
const dotenv =require("dotenv");
dotenv.config();


app.get("/",(req,res)=>{
    res.send("This is home section")
});





app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
});