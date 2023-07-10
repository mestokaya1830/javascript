const template = document.createElement("template");
template.innerHTML = `
<style>
  @import url('./components/header/header.css')
</style>
<header>Javascript Web Components</header>
`;

class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

window.customElements.define("app-header", AppHeader);