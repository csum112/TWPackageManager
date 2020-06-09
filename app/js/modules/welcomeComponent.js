export class WelcomeComponent extends HTMLElement {

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

            h1 {
                border-bottom: 2px solid #894EC6;
            }
            h3 {
                color: #894EC6;
            }

            .distros {
                height: 50vh;
                display: flex;
                position: relative;
                flex-direction: row;
                justify-content: space-evenly;
                align-items: center;
                overflow-y: auto, hidden;
            }
            
            img {
                margin-top: 5rem;
                margin-bottom: 5rem;
                margin-left: 3rem;
                margin-right: 3rem;
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
            <h1>Welcome</h1>
            <h3>Pick your flavour.</h3>
            <div class="distros">
                <a href="/nav" onclick="setDistro('brewDistro')" id="brew"><img src="/assets/png/brew_logo.png" alt="Brew logo" width="250" height="116"></a>
                <a href="/nav" onclick="setDistro('archDistro')"><img src="/assets/png/arch_logo.png" alt="Archlinux logo" width="200" height="60"></a>
            </div>
        </div>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }

}