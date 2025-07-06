class TestImage extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `
      <style>
        img{width:50px;}
      </style>
      <img src="${this.getAttribute('img')}" alt="no image"/>
    `
  }
}

customElements.define('test-image', TestImage)

//with shadow
// const template = document.createElement('template')
// template.innerHTML = `
// <style>
//   img{width:50px;}
// </style>
// <img src="" alt="no images" />`

// class TestImage extends HTMLElement {
//   constructor(){
//     super()
//     this.attachShadow({mode: 'open'})
//     this.shadowRoot.appendChild(template.content.cloneNode(true))
//     this.shadowRoot.querySelector('img').src = this.getAttribute('img')
//   }
// }
// customElements.define('test-image', TestImage)