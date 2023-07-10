const template = document.createElement('template')
template.innerHTML = `
<style>
  p{
    color:blue;
  }
</style>
<p></p>
`

class myElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild((template.content.cloneNode(true)))

    //add p content
    this.shadowRoot.querySelector('p').innerHTML = 'Set content With Shadow'
  }
}

window.customElements.define('my-element', myElement)