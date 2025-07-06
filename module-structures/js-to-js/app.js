import function2 from './module.js';

//dynamic load after page loading
// import('./module.js').then(model => {
//   console.log(model)
// })
//with async await
// const getImport = async() => {
//   const {default: User} = await import('./module.js')
//   console.log(User('mesto'))
// }
// getImport()

//with promise
// import('./module.js').then(({default: function2, User, Admin}) => {
//   console.log(function2())
// })

import { testFunction, User, Admin, Person, UserClass, RegularFunction } from "./module.js";
import ff from './module.js'

//or call together
  // import ff, { testFunction, User, Admin, Person, UserClass, RegularFunction } from "./module.js";
  // import {default as FF testFunction, User, Admin, Person, UserClass, RegularFunction } from "./module.js";

//call User class as UserClass
  // import { User as UserClass, Admin as AdminClass } from './module.js'

//or collect all in myClass
  // import * as Myclass from "./module.js";
  // console.log(Myclass)
  // console.log(Myclass.Admin('mesto','salak'))

//general export usage
  console.log(testFunction())
  console.log(RegularFunction())
  console.log(User('mesto','kaya'))
  console.log(Admin('filiz','polat'))
  console.log(Person.fullName())

//default export usage
  console.log(ff())


//class general export usage
  const newUser = new UserClass('bidik','ilos')
  console.log(newUser.name)
  console.log(newUser.lastName)
  console.log(newUser.fullName())

