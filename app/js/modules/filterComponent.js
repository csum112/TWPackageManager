export class FilterComponent extends HTMLElement {

    style = `
    <style>
        .wrapper {
            position: relative;
            margin: 0px;
            padding: 0px;
            height: 90vh;
        }

        .back-button {
            position: absolute;
            top: 2rem;
            left: 2rem;
            z-index: 1000;
            background: none;
            border: none;
            color: #894EC6;
        }

        .resetall-button {
            position: absolute;
            bottom: 10rem;
            left: 8rem;
            height: 2rem;
            width: 9rem;
            font-size: 2rem;
            background: none;
            border: none;
            color: #894EC6;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
        }

        .apply-button {
            position: absolute;
            bottom: 10rem;
            right: 8rem;
            height: 2rem;
            width: 9rem;
            font-size: 2rem;
            font-weight: bold;
            background: none;
            border: none;
            color: #894EC6;
            font-family: Roboto;
            font-style: normal;
            font-weight: Bold;
        }

        @media (max-width: 720px), (orientation:portrait) {
        
            .wrapper {
                height: 100vh;
            }

        }
    </style>`;

    template = `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">

    <div class="wrapper">
        <button class="back-button" id="back-button">
            <i class="fas fa-angle-left fa-3x"></i>
        </button>

        <button class="resetall-button" id="resetall-button">
            Reset All
        </button>

        <button class="apply-button" id="apply-button">
            Apply
        </button>
    </div>
  `;

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