class TestHeader extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `<h2>${this.getAttribute('name')}</h2>`
  }
}

customElements.define('test-header', TestHeader)

//with shadow
// const template = document.createElement('template')
// template.innerHTML = '<h2></h2>'
// class TestHeader extends HTMLElement {
//   constructor(){
//     super()
//     this.attachShadow({mode: 'open'})
//     this.shadowRoot.appendChild(template.content.cloneNode(true))
//     this.shadowRoot.querySelector('h2').innerHTML = this.getAttribute('name')
//   }
// }
// customElements.define('test-header', TestHeader)