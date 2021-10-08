const express = require('express');
const  Video=require('../database-mongodb/video')
const  Popular=require('../database-mongodb/popular')
const morgan= require ("morgan")
const cors=require('cors');
const app = express();
const PORT = 3000;
app.use(morgan("dev"))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/videos', function(req, res) {
  Video.find({})
  .then((result)=>{
    res.status(201).send(result)
  })
  .catch(()=>{
    res.status(403).send("failed")
  })
});
app.get('/api/videos/:videoId', function(req, res) {
  Video.findOne({_id:req.params.videoId})
  .then((result)=>{
    res.status(201).send(result)
  })
  .catch(()=>{
    res.status(403).send("failed")
  })
});

app.get('/api/pop', function(req, res) {
  Popular.find({})
  .then((result)=>{
    res.status(201).send(result)
  })
  .catch(()=>{
    res.status(403).send("failed")
  })
});
app.get('/api/pop/:videoId', function(req, res) {
  Popular.findOne({_id:req.params.videoId})
  .then((result)=>{
    res.status(201).send(result)
  })
  .catch(()=>{
    res.status(403).send("failed")
  })
});





app.listen(PORT, () => {console.log('yemshy')
});