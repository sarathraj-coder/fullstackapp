## client setup

nvm use v9.8.0

vue init webpack client

npm run dev

## Server setup

npm init -f

npm install --save nodemon eslint

"scripts": {
    "start": "./node_modules/nodemon/bin/nodemon.js src/app.js 'npm run lint && node'",
    "lint": "./node_modules/.bin/eslint **/*.js"
  }

### overcome error

./node_modules/eslint/bin/eslint.js --init

npm start --> to start the server

### server app packages

npm install express body-parser cors morgan

### Sample server 

```  
const express = require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const morgan=require('morgan')

const app=express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())



app.get('/status',(req,res)=>{
    res.send({message:'hello world'})
})

app.listen(process.env.PORT || 8081) 

```
