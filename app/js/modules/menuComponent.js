export class MenuComponent extends HTMLElement {
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
        padding-left: 2rem;
        color: #894EC6;
    }
    
    .shop-button {
        color: #fff;
        background: #894EC6;
        padding: 1rem 1rem;
        border-radius: 1rem;
        margin-right: 6rem;
        box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
    
    }
    
    .menu-footer {
        box-sizing: border-box;
        position: absolute;
        display: flex;
        bottom: 4rem;
        width: 100%;
        justify-content: space-between;
        text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
    }
    
    .menu-footer a:nth-child(1) {
        color: #894EC6;
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
    
    .install-queue {
        list-style: none;
        font-size: 1.2rem;
    
    }
    
    .install-queue li i {
        background-color: #35D9D8;
        border-radius: 1rem;
        padding: 0.4rem;
        margin-right: 1rem;
        color: #fff;
        margin-bottom: 0.5rem;
    }
    </style>`;

    template = `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">
    <div class="menu-shell">

    <a class="back-button">
        <i class="fas fa-angle-left fa-3x"></i>
    </a>

    
    <div class="content">
        <div class="header">
            <h1>My Package List</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dui habitant risus, sed etiam quam. Vitae cras rhoncus hendrerit ultrices in aenean duis praesent. Tellus in faucibus massa euismod blandit. Aliquet et neque nam eget viverra.</p>
        </div>

        <ul class="install-queue">
            <li><i class="fas fa-check"></i>bison</li>
            <li><i class="fas fa-check"></i>vlc</li>
            <li><i class="fas fa-check"></i>css</li>
            <li><i class="fas fa-check"></i>sass</li>
            <li><i class="fas fa-check"></i>angular</li>
            <li><i class="fas fa-check"></i>react-native</li>
        </ul>
    </div>

    <div class="menu-footer">
        <a href="#">
            Choose another location
        </a>
        <a href="#" class="shop-button">
            <i class="fas fa-download fa-2x"></i>
        </a>
    </div>

</div>`;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }
}