const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const pool = require('./database')

const login = require('./routes/login')

const app = express()
const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(path.join(__dirname, 'styles')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/login', login)

app.get('/ping', function (req, res) {
  return res.send('pong')
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/register', function (req, res) {
  const params = [req.body.name, req.body.email, req.body.password]
  pool.query('INSERT INTO owners(name,email,password) VALUES($1, $2, $3);', params, (err) => {
    if (err) return res.send(err);
    return res.redirect('/')
  })
})
app.listen(port, () => {console.log(`${new Date()} server started ${port}`)});



/** 
 * create - post
 * read- get
 * update- put
 * delete- delete
 */