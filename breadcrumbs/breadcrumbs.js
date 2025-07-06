
const links = document.querySelectorAll('.links')
let routes = ['home','about','contact']
let crumbsList = []
links.forEach((item, index) => {
  item.addEventListener('click', (e) => {
    crumbsList = []
    for (let i = 0; i <= index; i++) {
      console.log(routes[i])
      if(routes[i] == 'home'){
            crumbsList.push(
              `<a href="/" class="active">${routes[i]}</a>`
            );
          } else {
            crumbsList.push(
              `<a href="/${routes[i]}" class="active">${routes[i]}</a>`
            );
          }
    }
    document.getElementById('crumbs').innerHTML = crumbsList.map(item => item.split(',')).join(' > ')
  })
});
