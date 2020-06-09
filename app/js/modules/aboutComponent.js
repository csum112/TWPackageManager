export class AboutComponent extends HTMLElement {

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
            
            h1, h3 {
                color: #fff;
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: lighter;
            }
            
            @media (max-width: 720px) and (orientation: portrait) {
            
                .distros {
                    flex-direction: column;
                }
            
            }
        </style>
    `;

    template = `
        <div class="page-content">
            <h1>About</h1>
        </div>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }

}