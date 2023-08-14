import Admin from './admin.js'
import Users from './users.js'
import './main.css'
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/3.png'


console.log(Admin.getAdmin())
console.log(Users.getUsers())

document.querySelector('img').src = img1
const imageName = [img1, img2, img3]

document.querySelectorAll('img').forEach((item, index) => {
  item.src = imageName[index]
});
//after bundle run on console node ./dist/bundle.js