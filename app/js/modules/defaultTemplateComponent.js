export class DefaultTemplateComponent extends HTMLElement {

    style = `
        <style>
        .main-wrapper {
            position: fixed;
            margin: 0px;
            padding: 0px;
            height: 100%;
            width: 100vw;
            z-index: 1000;
            background: #252a41;
            top: 0px;
            left: 0px;
            overflow-y: scroll;
        }

        .main-wrapper::-webkit-scrollbar {
            display: none;
        }

        .dots1 {
            user-select: none;
            position: fixed;
            top: -5vh;
            right: 5vw;
        }
        
        .dots2 {
            user-select: none;
            position: fixed;
            bottom: -5vh;
            left: 5vw;
        }
        
        .logo {
            user-select: none;
            position: relative;
            padding-top: 2rem;
            width: 162px;
            height: 77px;
            left: 25vw;
            font-family: Zilla Slab Highlight;
            font-style: normal;
            font-weight: bold;
            font-size: 48px;
            color: rgba(202, 204, 219, 0.3);
            text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
        }
        
        .page-shell {
            min-height: 100%;
            display: flex;
            position: relative;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
        }
        
        slot {
            padding-bottom: 3rem;
        }

        footer {
            position: absolute;
            height: 3rem;
            bottom: 0;
            width: 100%;
            background-color: rgba(202, 204, 219, 0.3);
            color: #252a41;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: lighter;
            text-align: center;
        }
        
        @media (max-width: 720px) and (orientation: portrait) {
        
            .dots1 {
                display: none;
            }
            
            .dots2 {
                display: none;
            }
        
            .logo {
                left: 30px;
            }
        
        }
       
        </style>
    `;

    template = `
    <div class="main-wrapper">
        <a href="/nav"><div class="logo">DEmI</div></a>
        <div class="page-shell">
            <div class="dots1">
                <img src="/assets/svg/dots.svg" alt="design-dots" width="200" height="200">
            </div>
            <div class="dots2">
                <img src="/assets/svg/dots.svg" alt="design-dots" width="200" height="200">
            </div>

            <slot name="page-content"></slot>

            <footer>
                <p>&copy Copyright 2020 | DEmI</p>
            </footer>
        </div>
    </div>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
        
    }

}