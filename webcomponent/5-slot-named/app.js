const template = document.createElement('template')
template.innerHTML = `
<style>
  div{
    border:1px solid #ccc;
    border-radius:5px;
    margin:10px 0;
    padding:10px;
    box-sizing:border-box;
  }
</style>

<div>
  <p><slot name="date"/></p>
  <p><slot name="address"/></p>
  <p><slot name="img" /></p>
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