class MyElement extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = 'This is a custom HTML element'
  }
}

window.customElements.define('my-element', MyElement)