const template = document.createElement('template')
template.innerHTML = `
<style>
  div{
    width:610px;
    border:1px solid #ccc;
    border-radius:5px;
    margin:10px 0;
    padding:10px;
    box-sizing:border-box;
  }
</style>

<div>
  <slot />
</div>
`

class MyElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild((template.content.cloneNode(true)))
  }
}

window.customElements.define('my-element', MyElement)