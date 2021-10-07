const express = require('express');
const  User=require('../database-mongodb/User')
const  Video=require('../database-mongodb/video')
const cors=require('cors');
const app = express();
const PORT = 3000;
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

app.post('/Rmdb/signup',(req,res)=>{ 
const user= new User ({username:req.body.username,password:req.body.password})
user.save()
.then((response)=>res.status(201).send(response))
.catch(()=>res.status(403).send('new user not saved '))
})


app.post('/Rmdb/signup',(req,res)=>{ 
const user= new User ({username:req.body.username,password:req.body.password})
user.save()
.then((response)=>res.status(201).send(response))
.catch(()=>res.status(403).send('new user not saved '))
})



app.listen(PORT, () => {console.log('yemshy')
});