var express = require("express");
var app = express();
var videogamesRouter = require("./controllers/videogames_controller.js")

app.use(express.static(__dirname + "/../client/build"))

app.use("/api/videogames", videogamesRouter);

app.listen(3000, function(){
  console.log("Listening on port: 3000")
});
