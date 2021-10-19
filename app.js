require('dotenv').config()
var express = require("express");
const { dirname } = require('path');
var path = require("path");
app =express();
let http = require('http').createServer(app);

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
});
app.use(express.static(__dirname +"/public"));
var port = process.env.PORT|| 3000;

http.listen(port,()=>{
    console.log("listneing on port...",port);
});