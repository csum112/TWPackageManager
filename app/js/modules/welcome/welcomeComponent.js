export class WelcomeComponent extends HTMLElement {

    style = `
    <style>
        .menu-shell {
            margin-top: 2rem;
            display: flex;
            position: relative;
            align-items: center;
            text-align: center;
            flex-direction: column;
            justify-content: space-around;
            height: 100%;
            padding: 1rem;
            max-width: 100%;
        }
        
        .content {
            height: 70vh;
        }
        
        .content h1, .content p, .content h4 {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
        }

        .content img {
            
        }

    </style>`;

    template = `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">
    <div class="menu-shell">
        
        <div class="content">
            <h1>Welcome</h1>
            <h4>Pick your flavour.</h4>
            <img src="/assets/png/centos_logo.png" alt="CentOS logo" width="200" height="100">
            <img src="/assets/png/debian_logo.png" alt="Debian logo" width="200" height="100">
            <img src="/assets/png/arch_logo.png" alt="Archlinux logo" width="200" height="100">
            <a href="#"><p>Next</p></a>
        </div>

    </div>`;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }
}