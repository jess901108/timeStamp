//declare dependencies

var express = require('express');
var path = require('path');
var port = process.env.PORT || 5000;
var moment = require('moment');

var app = express();

app.use(express.static(path.resolve(__dirname,"client")));

app.get("/:time",function(req,res){
  var time = moment(req.params.time,"MMMM DD, YYYY",true);
  if (!time.isValid()){
    time = moment.unix(req.params.time)
  }
  
  if (!time.isValid()){
    res.json({
      'natural':null,
      'unix':null
    });
  }
  
  
  res.json({
    'natural':time.format("MMMM DD, YYYY"),
    'unix':time.format('X')
  });
});

app.listen(port);