const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/Rmdb';

mongoose.connect(mongoUri, {useCreateIndex:true, useNewUrlParser: true,useUnifiedTopology: true }, () => {
  console.log('db connected');
});
const db = mongoose.connection;

module.exports = db;
