export class NavComponent extends HTMLElement {

    style = `
    <style>

    .page-content {
        margin-top: 2rem;
        margin-bottom: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    
    a:link, a:visited {
        text-decoration: none;
    }
    
    h1 {
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: lighter;
        font-size: 42px;
        margin-top: 2rem;
    }
    
    </style>`;

    template = `
    <div class="page-content">
        <a><h1>Home</h1></a>
        <a><h1>Contact</h1></a>
        <a><h1>About</h1></a>
    </div>
    `;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.innerHTML = this.style + this.template;
    }

}