const template = document.createElement('template')
template.innerHTML = `
<style>
  h1{
    color:blue;
  }
  div{
    width:610px;
    border:1px solid #ccc;
    border-radius:5px;
    margin:10px 0;
    padding:10px;
    box-sizing:border-box;
  }
</style>
<p></p>
<img src="" alt=""></img>
<div>
  <slot />
</div>
`

class MyElement extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({mode:'open'})
    this.shadowRoot.appendChild((template.content.cloneNode(true)))

    //add p and img content
    this.shadowRoot.querySelector('p').innerHTML = this.getAttribute('title')
    this.shadowRoot.querySelector('img').src = this.getAttribute('img')
  }
}

window.customElements.define('my-element', MyElement)