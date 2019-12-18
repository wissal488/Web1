import express from 'express';
var app=express();

app.get('/',(req,res)=>{
    res.end('bonjour fr express');
})

app.get('/:name',(req,res)=>{
    var a=req.params.name;
    res.end(`bonjour fr express ${a}`);
})

app.listen(900,(err)=>{
    console.log("Server running in 900..")
});