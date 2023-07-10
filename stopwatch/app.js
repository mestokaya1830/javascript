let watch = document.getElementById('watch')
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')

let startTime = 0
let elapsedTime = 0
let currentTime = 0

let poused = true
let inervalId;

let hours = 0
let min = 0
let sec = 0

startBtn.addEventListener('click', () => {
  if(poused) {
    poused = false
    startTime =  Date.now() - elapsedTime
    inervalId =  setInterval(updateTime, 75)
  }
})

function updateTime(){
  elapsedTime = Date.now() - startTime
  sec = Math.floor((elapsedTime / 1000) % 60)
  min = Math.floor((elapsedTime / (1000 * 60)) % 60)
  hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60)

  sec = addZero(sec)
  min = addZero(min)
  hours = addZero(hours)

  watch.innerText = `${hours} : ${min} : ${sec}`
}

function addZero(unit){
  return (("0") + unit).length > 2 ? unit : "0" + unit
}

stopBtn.addEventListener('click', () => {
  if(!poused){
    poused = true
    clearInterval(inervalId)
  }
})

resetBtn.addEventListener('click', () => {
  poused = true
  startTime = 0
  elapsedTime = 0
  currentTime = 0
  hours = 0
  min = 0
  sec = 0
  clearInterval(inervalId)
  watch.innerText = "00 : 00 : 00"
})

