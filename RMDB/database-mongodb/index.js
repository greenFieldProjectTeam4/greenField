const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/Rmdb';

mongoose.connect(mongoUri, { useNewUrlParser: true 
, useUnifiedTopology: true ,useCreateIndex: true }, () => {
  console.log("db connected");
});
const db = mongoose.connection;

module.exports = db;
