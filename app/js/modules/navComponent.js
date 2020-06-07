export class NavComponent extends HTMLElement {

    style = `
    <style>

    .main-wrapper {
        position: fixed;
        height: 100vh;
        width: 100vw;
        z-index: 1000;
        background: #252a41;
        top: 0px;
        left: 0px;
    }

    .dots1 {
        user-select: none;
        position: fixed;
        top: -80px;
        right: 30px;
    }
    
    .dots2 {
        user-select: none;
        position: fixed;
        bottom: -115px;
        left: 30px;
    }
    
    .logo {
        user-select: none;
        position: relative;
        width: 162px;
        height: 77px;
        right: 27.5rem;
        font-family: Zilla Slab Highlight;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        color: rgba(202, 204, 219, 0.3);
        margin-bottom: 3rem;
        text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
    }
    
    .welcome-shell {
        margin-top: 2rem;
        margin-bottom: 5rem;
        display: flex;
        position: relative;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }
    
    a:link, a:visited {
        text-decoration: none;
    }
    
    .welcome-shell h1{
        color: #fff;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: lighter;
        font-size: 42px;
        margin-top: 2rem;
    }
    
    
    
    footer {
        position: fixed;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        bottom: 0;
        width: 100%;
        background-color: rgba(202, 204, 219, 0.3);
        color: #252a41;
        text-align: center;
    }
    
    @media (max-width: 720px) and (orientation: portrait) {
    
        .dots1, .dots2{
            display: none;
        }
        .logo {
            left: 27px;
        }
    
    }
    </style>`;

    template = `
    <div class="main-wrapper">
        <div class="welcome-shell">
            <div class="dots1">
                <img src="/assets/svg/dots.svg" alt="design-dots" width="200" height="200">
            </div>
            <div class="dots2">
                <img src="/assets/svg/dots.svg" alt="design-dots" width="200" height="200">
            </div>
            <div class="logo">DEmI</div>
            <a><h1>Home</h1></a>
            <a><h1>Contact</h1></a>
            <a><h1>About</h1></a>
        </div>

        <footer>
            <p>&copy Copyright 2020 | DEmI</p>
        </footer> 
    </div>
  `;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.innerHTML = this.style + this.template;
    }

}