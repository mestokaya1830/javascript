const template = document.createElement("template");
template.innerHTML = `
<style>
  #details{
    width:610px;
    border:1px solid #ccc;
    border-radius:5px;
    margin:10px 0;
    padding:10px;
    box-sizing:border-box;
    display:none;
  }
</style>
<button id="dialog">Details</button>
<p id="details">Details button works</p>
<button id="alert">Alert</button>
<p></p>
<img src="" alt=""></img>
<div>
  <p><slot name="date"/></p>
  <p><slot name="address"/></p>
  <p><slot name="img"/></p>
</div>
`;

class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.showDetails = false
  }
  //event
  connectedCallback() {
    //dialog
    this.shadowRoot.getElementById("dialog").addEventListener("click", () => {
      this.showDetails = !this.showDetails
      if (this.showDetails) {
        this.shadowRoot.getElementById('details').style.display = 'block'
      } else {
        this.shadowRoot.getElementById('details').style.display = 'none'
      }
    })
    //alert
    this.shadowRoot.getElementById("alert").addEventListener("click", () => {
      alert('Hello')
    })
  }
  disconnectedCallback() {
    this.shadowRoot.getElementById("dialog").removeEventListener("click")
    this.shadowRoot.getElementById("alert").removeEventListener("click")
  }
}

window.customElements.define("my-element", MyElement);
