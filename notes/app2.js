//version update from dom

let btn = document.getElementById("btn")
let el = document.querySelector('.notes')
let title = document.querySelector(".title")
let desc = document.querySelector('.desc')

let notes = JSON.parse(localStorage.getItem("notes"))
if (notes) {
  notes.forEach(item => {
    addNotes(item)
  })
}

btn.addEventListener("click", (e) => {
  addNotes()
})

function addNotes(param) {
  let titleval = title.value
  let descVal = desc.value
  
  if (param) {
    titleval = param.title
    descVal = param.desc
  }
  
  let card = document.createElement("div")
  card.classList.add("card")
  
  if (titleval) {
    card.innerHTML = `<h3>${titleval}</h3>
    <p class="ptag">${descVal}</p>
    <button class="del">Delete</button>`
    el.appendChild(card)
    updateList()
  }
  let del = card.querySelector(".del")
  del.addEventListener('click', () => {
    card.remove()
    updateList()
  })
}

function updateList() {
  let card = document.querySelectorAll(".card")
  let arr = []
  card.forEach(element => {
    arr.push({
      title: element.children[0].innerText,
      desc: element.children[1].innerText
    })
  })
  localStorage.setItem("notes", JSON.stringify(arr))
}