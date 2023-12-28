//version update from localstorage

let btn = document.getElementById("btn")
let el = document.querySelector('.notes')
let title = document.querySelector(".title")
let desc = document.querySelector('.desc')

let arr = []
let id = 0

let notes = JSON.parse(localStorage.getItem("notes"))
if (notes) {
  notes.forEach(item => {
    addNotes(item)
  })
}

btn.addEventListener("click", (e) => {
  id = Math.floor(Math.random() * 1000)
  addNotes()
})

function addNotes(param) {
  let titleval = title.value
  let descVal = desc.value
  
  if (param) {
    titleval = param.title
    descVal = param.desc
    id = param.id
  }
  
  //create dom elements
  let card = document.createElement("div")
  card.classList.add("card")
  
  if (titleval) {
    card.innerHTML = `<h3>${titleval}</h3>
    <p class="ptag">${descVal}</p>
    <button class="del" id=${id}>Delete</button>`
    el.appendChild(card)

    //set localStorage
    arr.push({
      title: titleval,
      desc: descVal,
      id:id
    })
    localStorage.setItem("notes", JSON.stringify(arr))
  }
  
}

//delete
document.querySelectorAll(".del").forEach(item => {
  item.addEventListener('click', (e) => {
    //remove from dom
    e.target.parentElement.remove()
    
    //remove from localStorage
    notes.forEach((item , index) => {
      if(item.id == e.target.id){
        notes.splice(index, 1)
      }
    })
    //reset localStorage
    localStorage.setItem("notes", JSON.stringify(notes))
  })
})