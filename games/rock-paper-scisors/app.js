const playerText = document.getElementById('player')
const computerText = document.getElementById('computer')
const resultText = document.getElementById('result')

let btn = document.querySelectorAll('.btn')

let player
let computer
let result

btn.forEach(item => {
  item.addEventListener('click', () => {
    player = item.textContent
    computerTurn()
    playerText.textContent = `Player: ${player}`
    computerText.textContent = `Computer: ${computer}`
    resultText.textContent = checkWinner()
  })
})

const computerTurn = () => {
  let randumNum =  Math.floor(Math.random() * 3) + 1
  switch(randumNum){
    case 1:
      computer = 'ROCK';
      break;
    case 2:
      computer = 'PAPER';
      break;
    case 3:
      computer = 'SCISSORS';
      break;
  }
}

const checkWinner = () => {
  if(computer == player){
    return 'Draw!'
  }
  else if(computer == 'ROCK'){
    return(player == 'PAPER') ? 'You Win' : 'You Lose'
  }
  else if(computer == 'PAPER'){
    return(player == 'SCISSORS') ? 'You Win' : 'You Lose'
  }
  else if(computer == 'SCISSORS'){
    return(player == 'ROCK') ? 'You Win' : 'You Lose'
  }
}