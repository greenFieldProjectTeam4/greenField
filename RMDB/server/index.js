const express = require('express');

const  {Video,User}=require('../database-mongodb/User')
const cors=require('cors');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));



app.post('/Rmdb/signup',(req,res)=>{ 
const user= new User ({username:req.body.username,password:req.body.password})
user.save()
.then((response)=>res.status(201).send(response))
.catch(()=>res.status(403).send('new user not saved '))
})



app.listen(PORT, () => {console.log('yemshy'
});