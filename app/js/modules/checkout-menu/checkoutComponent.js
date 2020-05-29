export class CheckoutComponent extends HTMLElement {

    style = `<style>
    .menu-shell {
        margin-top: 2rem;
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 3rem;
        max-width: 100%;
    }
    
    .back-button{
        margin-right: auto;
        color: #894EC6;
        background: none;
        border: none;
    }
    
    .clipb-button {
        color: #fff;
        background: #894EC6;
        padding: 1rem 1rem;
        border-radius: 1rem;
        margin-right: 6rem;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
    }

    hr {
        width: 100%;
    }
    
    .menu-footer {
        box-sizing: border-box;
        position: absolute;
        display: flex;
        bottom: 4rem;
        width: 100%;
        justify-content: space-between;
        color: #894EC6;
        text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
    }
    
    .menu-footer a:nth-child(1) {
        text-decoration: none;
    }
    
    .content {
        height: 70vh;
    }
    
    .content h1, .content p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
    }

    .content h4 {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 1.2rem;

        padding: 1rem;
        border-radius: 1rem;
        color: #FFFFFF;
        background: #3B3F54;
    }
    </style>`;

    template = `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">
    <div class="menu-shell">

        <button class="back-button" id="back-button">
            <i class="fas fa-angle-left fa-3x"></i>
        </button>

        
        <div class="content">
            <h1>Hooraaay!</h1>
            <p>Your installer is ready! Copy the following command into the terminal:</p>
            <hr>
            <h4>npm install moment</h4>
        </div>

        <div class="menu-footer">
            <p>Copy to clipboard!</p>
            <a href="#" class="clipb-button">
                <i class="fas fa-copy"></i>
            </a>
        </div>

    </div>`;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
        const buttonRef = this.shadowRoot.getElementById("back-button");
        buttonRef.onclick = () => {
            this.shadowRoot.dispatchEvent(new CustomEvent("toggleMenu", {
                bubbles: true,
                composed: true
            }));
            console.log(this)
    }
    }
}