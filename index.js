require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
// app.use(express.static('public'))
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/public', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/exercises', (req, res) => {
  res.render('exercises')
})

app.get('/search', (req, res) => {
  res.render('github')
})

app.post('/form', (req, res) => {
  console.log('TCL: req', req.body)
  res.status(200).json({ sucess: 'object recieved' })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port + '...'))
