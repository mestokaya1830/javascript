//export functions
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