var express = require("express");
var path = require("path");
app =express();

app.use(express.static(__dirname +"/public"));
app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname,'public','Ch1','01_02','example.html');
})
app.listen(3000);