require('dotenv').config()
const path = require('path')
const express = require('express')
const multer = require('multer')

const app = express()
// app.use(express.static('public'))
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/public', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/exercises', (req, res) => {
  res.render('exercises')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port + '...'))
