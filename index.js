require('dotenv').config()
const path = require('path')
const express = require('express')
const multer = require('multer')

const app = express()
// app.use(express.static('public'))
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/public', express.static(__dirname + '/public'))
app.set('view engine', 'ejs')

const upload = multer({ dest: 'uploads/' })
const uploadValidationImg = multer({
  dest: 'uploads/',
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/')
    if (isPhoto) {
      next(null, true)
    } else {
      next({ message: 'El tipo de archivo no es válido' }, false)
    }
  }
})

app.get('/', (req, res) => {
  res.render('index')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('Listening on port ' + port + '...'))
