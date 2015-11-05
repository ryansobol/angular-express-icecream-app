var express = require("express"),
app = express(),
bodyParser = require("body-parser");
methodOverride = require("method-override");
morgan = require("morgan");


app.get('/', function(req, res){
  res.send("Hello!");
});

PORT = 3001;

app.listen(PORT, function(){
  console.log("This server is running on port", PORT);
});
