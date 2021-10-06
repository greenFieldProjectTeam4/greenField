const express = require('express');
const request = require('request');

const {Video, User} = require('../database-mongodb/schemas');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));



app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});