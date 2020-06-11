export class CheckoutComponent extends HTMLElement {

    style = `<style>
        hr {
            width: 100%;
        }
        
        .content {
            position: absolute;
            padding: 2rem;
            padding-top: 5rem;
            max-width: 22vw;
        }

        @media (max-width: 720px), (orientation:portrait) {
            .content {
                max-width: 80vw;
            }
        }
        
        .content h1, .content p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
        }

        .scroll {
            height: auto;
            width: 100%;
            overflow: auto;
        }

        .content .scroll p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 1rem;

            padding: 1rem;
            max-width: 100%;
            word-wrap: break-word;
            border-radius: 1rem;
            color: #FFFFFF;
            background: #3B3F54;
        }

    </style>`;

    getTemplate = (script) => `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight&display=swap" rel="stylesheet" />

    <div class="content">
        <h1>Hooraaay!</h1>
        <p>Your installer is ready! Copy the following command into the terminal:</p>
        <hr>
        <div class="scroll">
            <p><code>${script}</code></p>
        </div>
    </div>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        window.basketService.createScript().then(script => {
            this._shadow.innerHTML = this.style + this.getTemplate(script);    
        });
    }
}