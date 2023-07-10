const template = document.createElement('template')
template.innerHTML = `
<style>
  p{
    color:blue;
  }
</style>
<p></p>
<img src="" alt=""></img>
`

class MyElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild((template.content.cloneNode(true)))

    //add p and img content
    this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('text')
    this.shadowRoot.querySelector('img').src = this.getAttribute('img')
  }
}

window.customElements.define('my-element', MyElement)