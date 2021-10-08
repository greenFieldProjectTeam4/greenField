const express = require('express');
const User = require('../database-mongodb/User');
const Video = require('../database-mongodb/Video');
const cors = require('cors');
const app = express();
const PORT = 3000;
const crypt = require('./hash')

const morgan = require('morgan');
app.use(morgan('dev'))

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));


app.post('/signup', (req, res) => {
    User.find({ username: req.body.username })
    .then((err)=>{
        if (!err.length) {
            crypt.Hash(req.body.password)
            .then((passwordHashed) => {
                User.create({ username: req.body.username, password: passwordHashed })
                    .then(() => { res.status(201).send() })
                    .catch((err) => { res.send(err) })
            })
        } 
        else  {
            res.status(403).send(err)
       }

       })
  })




app.post('/signin', (req, res) => {
    User.find({ username: req.body.username })
        .then((err) => {console.log(err)

            if(err.length){
                crypt.compareHash(req.body.password, err[0].password)
                .then((response)=>{res.status(201).send(response) })
            } 
            else { console.log('err',);
                res.status(403).send(err)
            }          
        })
})

app.listen(PORT, () => { console.log('yemshy 3al 3000') });
