//export with function name usage import { User, Admin, <person, UserClass, testFunction } from "./module.js";
export const User = (firstname, lastName) => firstname +' '+ lastName
export const Admin = (firstname, lastName) => firstname +' '+ lastName
export const Person = {
  name:'Mesto',
  lastname:'Kaya',
  language:['Html5','Css','Javascript'],
  fullName (){
    return this.name +' '+ this.lastname
  }
}


export class UserClass {
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
  }
  fullName(){
    return this.name +' '+ this.lastName
  }
}

export const testFunction = () => {
  return 'Mesto'
}

//regular function
export function RegularFunction(){
  return 'Regular function'
}


//export default usage import ff from './module.js' you can change ff what do you like
const function2 = () => {
  return 'Hello'
}

export default function2