var mongo = require("mongodb");
var mongoClient = mongo.MongoClient;

var videoGamesQueryHelper = {
  url: "mongodb://localhost:27017/myCollection",
  all: function(callback){
    mongoClient.connect(this.url, function(err, db){
      var videogamesCollection = db.collection("videoGames");
      videogamesCollection.find().toArray(function(err, response){
        callback(response);
      })
    })
  },

  findByTitle: function(title, callback){
    mongoClient.connect(this.url, function(err, db){
      var videogamesCollection = db.collection("videoGames");
      videogamesCollection.find().toArray(function(err, response){
        console.log("Title to search", title);
        for (videogame of response){
          console.log(videogame);
          if (videogame.title === title) callback(videogame)
        }
        callback({});
      })
    })
  }
}


module.exports = videoGamesQueryHelper;
