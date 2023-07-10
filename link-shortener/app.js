const original =  document.getElementById('original')
const generate =  document.getElementById('generate')
const shortener =  document.getElementById('shortener')
const copy =  document.getElementById('copy')

generate.addEventListener('click', () => {
  fetch(`https://api.shrtco.de/v2/shorten?url=${original.value}`)
  .then((result) => result.json())
  .then((final) => {
    shortener.value = final.result.short_link
  })
  .catch(error => {
    console.log(error)
  })
})
copy.addEventListener('click', () => {
  navigator.clipboard.writeText(shortener.value)
  setTimeout(() => {
    shortener.value = 'Copied...'
  }, 1000)
})