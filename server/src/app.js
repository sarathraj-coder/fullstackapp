console.log('hello world');
const express = require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const morgan=require('morgan')

const app=express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
var User = require('./models/User.js');
//var mongoose = require('mongoose');
var mongoose = require('bluebird').promisifyAll(require('mongoose'));
//mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/example')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));



app.get('/status',(req,res)=>{
    res.send({message:'hello world'})
})

// app.post('/register',(req,res)=>{
//     res.send({message:`hello ${req.body.email} `})
// })
require('./routes/Users')(app)

app.listen(process.env.PORT || 8081)



