const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const path = require('path')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('static'))
app.use(fileUpload())

app.get('/', (req, res, next) => {
  res.sendFile('index.html')
})

app.post('/upload', async(req, res, next) => {
  // const file = req.files.file
  // await file.mv(path.join(__dirname,'static/uploads', file.name))
  // res.json({imgname: file.name})

  //multiple images first make input attr to multiple
    const file = req.files.file
    const imageList = file.map(item => {
      return item.mv(path.join(__dirname,'static', item.name))
    })
    await Promise.all(imageList)
    res.json('index')
})

app.listen(3000, () => {
  console.log('Server is running...')
})