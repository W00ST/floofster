const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const login = require('./routes/login')

const app = express()
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json())

app.get('/login', login)

app.get('/ping', function (req, res) {
  return res.send('pong')
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port, () => {console.log(`${new Date()} server started ${port}`)});


/** 
 * create - post
 * read- get
 * update- put
 * delete- delete
 */