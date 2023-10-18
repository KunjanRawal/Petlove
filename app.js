const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const index = express();

index.use(express.static("public"));

index.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

index.get("/Adopt",function(req,res){
  res.sendFile(__dirname + "/Adopt.html");
});

index.get("/signup",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

index.get("/donate",function(req,res){
    res.sendFile(__dirname + "/donate.html");
  });

  index.get("/rehome",function(req,res){
    res.sendFile(__dirname + "/rehome.html");
  });

  index.get("/petPedia",function(req,res){
    res.sendFile(__dirname + "/donate.html");
  });


index.listen(process.env.PORT || 3000,function(){
  console.log("server is up and running");
});
