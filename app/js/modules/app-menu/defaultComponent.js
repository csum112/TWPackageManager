export class DefaultComponent extends HTMLElement {

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

        .mobile-fab {
            position: absolute;
            bottom: 2rem;
            right: 2rem;
            height: 4rem;
            width: 4rem;
        }

        .mobile-fab:focus {
            outline: none;
            box-shadow: none;
        }

        .clip-button {
            color: #fff;
            background: #894EC6;
            padding: 1rem 1rem;
            border-radius: 1rem;
            border: none;
            box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
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

        <slot name="inner-content"></slot>

        <button class="mobile-fab clip-button"id="mobile-fab">
            <i class="fas fa-shopping-cart fa-2x"></i>
        </button>
    </div>
  `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
        const buttonRef = this.shadowRoot.getElementById("back-button");
        buttonRef.onclick = () => {
            window.navigationService.goBack();
        }
    }

}