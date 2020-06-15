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
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: lighter;
            }

            h1 {
                color: #fff;
                border-bottom: 2px solid #894EC6;
            }

            h3 {
                color: #894EC6;
            }

            ul {
                list-style-type: none;
                margin: 0;
                padding: 0;
                height: 50vh;
                width: 80vw;
                display: flex;
                position: relative;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                overflow-y: auto;
            }

            ul::-webkit-scrollbar {
                display: none;
            }

            img {
                padding: 1.5rem;
            }
            
            @media (max-width: 720px) and (orientation: portrait) {
            
                ul {
                    flex-direction: column;
                }

                img {
                    padding-top: 2rem;
                    padding-bottom: 2rem;
                }
            
            }
        </style>
    `;

    template = `
        <div class="page-content">
            <h1>Welcome</h1>
            <h3>Pick your flavour.</h3>
            <ul>
                <li><a onclick="window.distroService.setDistro('brew')" id="brew"><img src="/assets/png/brew_logo.png" alt="Brew logo" width="250" height="116"></a></li>
                <li><a onclick="window.distroService.setDistro('debian')"><img src="/assets/png/debian_logo.png" alt="Debian logo" width="200" height="100"></a></li>
                <li><a onclick="window.distroService.setDistro('arch')"><img src="/assets/png/arch_logo.png" alt="Archlinux logo" width="200" height="60"></a></li>
                <li><a onclick="window.distroService.setDistro('centos')"><img src="/assets/png/centos_logo.png" alt="CentOS logo" width="200" height="67"></a></li>
            </ul>
        </div>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }

}