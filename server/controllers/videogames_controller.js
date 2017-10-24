var express = require("express");
var router = express.Router();
var queryHelper = require("../db/queryHelper.js")

router.get('/', function (req, res) {
  console.log(Date.now(), '/api/videogames route hit');

  queryHelper.all(function (videogames){
    res.json(videogames)
  })
});

router.get("/:id", function(req, res){
  console.log(Date.now(), '/api/videogames/:id route hit');
  var title = req.params.id;
  queryHelper.findByTitle(title, function(videogame){
    res.json(videogame);
  })
})

module.exports = router
