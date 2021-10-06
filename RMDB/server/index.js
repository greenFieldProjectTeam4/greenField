const express = require('express');

const  {Video,User}=require('../database-mongodb/schemas')
const cors=require('cors');
const { default: axios } = require('axios');
const app = express();
const PORT = 3000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));


app.get('/api/trailers', function(req, res) {
  // Video.find({})
  // .then((response)=>{
  //   res.status(201).send(response)
  // })
  // .catch(()=>{
  //   res.status(403).send("Failed to Get!")
  // })
});
// app.put('/api/trailers/:trailerId', function(req, res) {
//   Video.findOneAndUpdate({_id:req.params.id},req.body)
//   .then((response)=>{
//     res.status(201).send(response)
//   })
//   .catch(()=>{
//     res.status(403).send("Failed to Update!")
//   })
// });

// app.delete('/api/trailers/:trailerId', function(req, res) {
//   Video.findOneAndRemove({_id:req.params.id})
//   .then((response)=>{
//     res.status(201).send(response)
//   })
//   .catch(()=>{
//     res.status(403).send("Failed to Delete!")
//   })
// });


app.post('/Rmdb/signup',(req,res)=>{ 
const user= new User ({username:req.body.username,password:req.body.password})
user.save()
.then((response)=>res.status(201).send(response))
.catch(()=>res.status(403).send('new user not saved '))
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});