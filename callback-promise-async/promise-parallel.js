const fs = require('fs')

const file1 = () => {
  fs.readFile('./files/file1.txt', 'utf8', (err, data) => {
    console.log(data)
  })
}
const file2 = () => {
  fs.readFile('./files/file2.txt', 'utf8', (err, data) => {
    console.log(data)
  })
}
const file3 = () => {
  fs.readFile('./files/file3.txt', 'utf8', (err, data) => {
    console.log(data)
  })
}

Promise.all([file1(),file2(),file3()]).then(result =>{
  return result
}).catch(err => {
  console.log(err)
})