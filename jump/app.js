let character = document.getElementById('character')
let monster = document.getElementById('monster')

function Jump(){
  if(character.classList !== 'animate'){
    character.classList.add('animate')
  }
  setTimeout(() => {
    character.classList.remove('animate')
  }, 500)
}

const checkDead = setInterval(() => {
  let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
  let monsterLeft = parseInt(window.getComputedStyle(monster).getPropertyValue('left'))

  console.log(monsterLeft)
  if(monsterLeft < 20 && monsterLeft > 0 && characterTop >= 133){
    monster.style.animation = 'none'
    monster.style.display = 'none'
    alert('You lost!')
    clearInterval(checkDead)
  }
}, 5)
