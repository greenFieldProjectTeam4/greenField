const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;



const videoSchema = new mongoose.Schema({

  "countries": { type: Object },
  "description": String,
  "directors": { type: Object },
  "genres": { type: Object },
  "imdb_id": String,
  "imdb_rating": Number,
  "language": [],
  "release_date": String,
  "stars": [],
  "title": String,
  "year": Number,
  "youtube_trailer_key": String,


})
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  toWatchList: [],
  history: { type: Object },
  coomments: { type: Object }
});

const Video = mongoose.model('Video', videoSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Video, User };
