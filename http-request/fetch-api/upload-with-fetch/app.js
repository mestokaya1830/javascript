import express from 'express'
const app = express()
import helmet from 'helmet'
import fileUpload from 'express-fileupload'
import path from 'path'

app.use(helmet())
app.use(express.static('static'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(fileUpload())


app.post('/upload', async (req, res, ) => {
  const files = req.files.file
  console.log(files)
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
  console.log('Server is running...')
})
