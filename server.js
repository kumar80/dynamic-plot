const http = require('http');
const fetch = require("node-fetch");
const static = require('node-static');
const fileServer = new static.Server('.');
var express = require('express');
var app = express();

let url1 = "";
let url2 = "";
let url3 = "";
let url4 = "";




app.get('/status1', async (req,res)=>{
  //let response = await fetch(url1);   
  let data = '5' ; //await response.json();
  res.send(data);
})

app.get('/status2', async (req,res)=>{
  //let response = await fetch(url1);   
  let data = '5' ; //await response.json();
  res.send(data);
})

app.get('/status3', async (req,res)=>{
 //let response = await fetch(url1);   
 let data = '5' ; //await response.json();
 res.send(data);
})

app.get('/status4', async (req,res)=>{
  //let response = await fetch(url1);   
  let data = '5' ; //await response.json();
  res.send(data);
})

app.listen(process.env.PORT || 8080);
app.use(express.static('./'))