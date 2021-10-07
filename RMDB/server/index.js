const express = require('express');

const { Video, User } = require('../database-mongodb/User')
const cors = require('cors');
const app = express();
const PORT = 3000;
const crypt = require('./hash')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));



// app.post('/Rmdb/signup',(req,res)=>{ 
// const user= new User ({username:req.body.username,password:req.body.password})
// user.save()
// .then((response)=>res.status(201).send(response))
// .catch(()=>res.status(403).send('new user not saved '))
// })

app.post('/signup', (req, res) => {
    var hashed = crypt.Hash(req.body.password)
    var user = new User({ username: req.body.username, password: hashed})
    user.save()
        .then(() => { res.status(201).send(true) })
        .catch((err) => { res.status(500).send(err) })

})


app.post('/signin', (req, res) => {
    console.log(req.body)
    User.find({ username: req.body.username })
        .then((data) => {
          console.log(data)
            if (crypt.compareHash(req.body.password, data[0].password)) {
                res.status(201).send(true)
            }
            else {
                res.status(500).send('wrong password')
            }
        })


})

app.listen(PORT, () => { console.log('yemshy 3al 3000') });