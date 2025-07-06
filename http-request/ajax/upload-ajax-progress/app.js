const express = require('express')
const app = express()
const fileUpload = require('express-fileupload')
const path = require('path')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.resolve('static')))
app.use(fileUpload())

app.get('/', (req, res, next) => {
  res.sendFile(path.resolve('./index.html'))
})

app.post('/upload', async (req, res, ) => {
  const files = req.files.file
 if(files.length > 1){
   const imageList = files.map(item => {
     return item.mv(path.resolve('static/uploads', item.name))
   })
   await Promise.all(imageList)
 } else {
   await files.mv(path.resolve('static/uploads', files.name))
 }
  res.status(200).json({result:req.files})
})

app.listen(3000, () => {
  console.log('Servr is running...')
})