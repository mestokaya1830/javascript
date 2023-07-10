let output = document.getElementById('output')
let btn = document.querySelectorAll('button')

let calculation  = []
let result

btn.forEach(element => {
  element.addEventListener('click', (item) => {
    const value = item.target.innerText
    if(value === 'AC'){
      calculation = []
      output.innerText = '0'
    } else if(value === 'DEL') {
      calculation.pop()
      result = calculation.join('')//clear commas
      output.innerText = result
    } else if(value === '=') {
      output.innerText = eval(result)
    } else  {
      calculation.push(value)
      result = calculation.join('')//clear commas
      output.innerText = result
    }
  })
})