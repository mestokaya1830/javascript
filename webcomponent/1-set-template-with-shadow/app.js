const template = document.createElement('template')
template.innerHTML = `
<style>
  p{
    color:blue;
  }
</style>
<p>Shadow Component</p>
`

class MyElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild((template.content.cloneNode(true)))
  }
}

window.customElements.define('my-element', MyElement)