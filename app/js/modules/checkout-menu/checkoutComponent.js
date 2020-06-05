export class CheckoutComponent extends HTMLElement {

    style = `<style>
        hr {
            width: 100%;
        }
        
        .content {
            position: absolute;
            padding: 2rem;
            padding-top: 5rem;
        }
        
        .content h1, .content p {
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
        }

        .scroll {
            width: 100%;
            height: 18rem;
            overflow: auto;
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

    <div class="content">
        <h1>Hooraaay!</h1>
        <p>Your installer is ready! Copy the following command into the terminal:</p>
        <hr>
        <div class="scroll">
            <h4>npm install moment</h4>
        </div>   
    </div>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
        
    }
}