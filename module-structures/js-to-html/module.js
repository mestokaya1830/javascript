const User = (firstname, lastName) => firstname +' '+ lastName
const Admin = (firstname, lastName) => firstname +' '+ lastName
const Person = {
  name:'Mesto',
  lastname:'Kaya',
  language:['Html5','Css','Javascript'],
  fullName (){
    return this.name +' '+ this.lastname
  }
}


class UserClass {
  constructor(name, lastName) {
    this.name = name
    this.lastName = lastName
  }
  fullName(){
    return this.name +' '+ this.lastName
  }
}

const testFunction = () => {
  return 'Mesto'
}

function RegularFunction(){
  return 'Regular function'
}


const function2 = () => {
  return 'Hello'
}
