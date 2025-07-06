import express from 'express'
const app = express()
import path from 'path'

app.use(express.json())
app.use(express.urlencoded({extended: true}))

let langs = [
  {id:1,name:'Html'},
  {id:2,name:'Css'},
  {id:3,name:'Java'},
  {id:3,name:'Javascript'},
  {id:4,name:'VueJS'},
  {id:6,name:'NodeJS'},
  {id:11,name:'Mysql'},
  {id:12,name:'Mongodb'}
]

app.get('/', (req, res) => {
  res.sendFile(path.resolve('./index.html'))
})

app.get('/langs', (req, res) => {
  res.json(langs)
})

app.post('/addlang', (req, res) => {
  console.log(req.headers)
  let addlang = {
    id:langs.length + 1,
    name:req.body.name
  }
  langs.push(addlang)
  res.json(langs)
})

app.put('/updatelang', (req, res) => {
  let updatelang = langs.find(item => item.id === parseInt(req.body.id))
  if (updatelang) {
    updatelang.name = req.body.name
  }
  res.json(langs)
})

app.delete('/deletelang', (req, res) => {
  let index = langs.findIndex(item => item.id == parseInt(req.body.id))
  if (index) {
    langs.splice(index, 1)
    res.json(langs)
  }
})

app.listen(3000, () => {
  console.log('Server is running...')
})