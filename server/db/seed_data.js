use myCollection;

db.dropDatabase();

db.videoGames.insert([
  {
    title: "Rocket League",
    genre: "Sports"
  },
  {
    title: "Dark Souls",
    genre: "Adventure"
  },
  {
    title: "Street Fighter V",
    genre: "Fight"
  }
])

db.videoGames.find();
