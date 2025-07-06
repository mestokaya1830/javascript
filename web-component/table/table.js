export default class Table extends HTMLElement{
  constructor(){//constructor() = > element oluşturulduğunda çağırılır.
    super()
    this.attachShadow({mode: 'open'});
  }
  connectedCallback() {//connectedCallback() => element dom üzerinde yerleştirildiği anda çağrılır.
    const headers = this.dataset.headers.split(',').map(item => item.trim())
    this.shadowRoot.innerHTML = `
      <style>
        table{
          border-collapse: collapse;
          font-size: 16px;
          font-family: sans-serif;
          min-width: 100%;
        }
        
        thead tr{
          background-color: #444;
          color: #fff;
          text-align: left;
        }
        
        th,td{
          font-weight: normal;
          padding: 7px 12px;
        }
        
        tbody tr{
          border-bottom: 1px solid #ddd;
        }
        tbody tr:nth-of-type(even){
          background-color: #f3f3f3;
        }
      </style>
      <table>
        <thead>
          <tr>
            ${headers.map(item => `<th>${item}</th>`).join('')}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    `
  }
  /**
   * @param data {array}
   */
  set data(data) {
    const rows = data.map(item => {
      const row = document.createElement('tr')
      const cells = item.map(item2 => {
        const cell = document.createElement('td')
        cell.textContent = item2
        return cell
      })
      row.append(...cells)
      return row
    })
    this.shadowRoot.querySelector('tbody').innerHTML = ''
    this.shadowRoot.querySelector('tbody').append(...rows)
  }
}
window.customElements.define('table-component', Table)