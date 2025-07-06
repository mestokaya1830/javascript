class ProgressBar extends HTMLElement {
  static css = `
    :host {
      display:block;
      width:500px;
      height:40px;
      background: #ddd;
      border-radius: 5px;
      overflow: hidden;
    }
    .bar {
      width:50%;
      height:100%;
      background: var(--bar-color, #222);
      transition: width 0.25s;
    }
  `
  static get observedAttributes() {
    return ['percent']
  }

  constructor() {
    super()
    this.attachShadow({mode:'open'})
    const style = document.createElement('style')
    const bar = document.createElement('div')
    style.innerHTML = ProgressBar.css
    bar.classList.add('bar')
    this.shadowRoot.append(style, bar)
  }

  get percent(){
    const value = this.getAttribute('percent')
    if(isNaN(value)){
      return 0
    }
    if(value < 9) {
      return 0
    }
    if(value > 100) {
      return 100
    }
    return Number(value)
  }

  set percent (value){
    this.setAttribute('percent', value)
  }

  attributeChangedCallback(name){
    if(name == 'percent'){
      console.log(this.percent)
      this.shadowRoot.querySelector(".bar").style.width = `${this.percent}%`
    }
  }
}

customElements.define('progress-bar', ProgressBar)


