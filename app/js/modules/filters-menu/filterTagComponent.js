export class FilterTagComponent extends HTMLElement {

    style = `
    <style>
    .filter_container {
      margin-right: 0.5rem;
      padding: 0.75rem;
      background: #3b3f54;
      border-radius: 40px;
      display: flex;
      justify-content: space-evenly;
      height: 20px;
      margin: 2px;
  
    }
    .filter_X {
      font-size: 10px;
      color: White;
      margin-right: 1rem;
    }
    .filter_label slot{
      font-family: 'Roboto', sans-serif;
      font-size: 15px;
      color: White;
    }
    </style>`;

    template = `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">

    <div class="filter_container">
            <div class="filter_X">
              <i class="fas fa-times fa-2x"></i>
            </div>
            <div class="filter_label">
            <slot name="filter-name"></slot>
            </div>
     </div>
  `;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.innerHTML = this.style + this.template;
    }

}