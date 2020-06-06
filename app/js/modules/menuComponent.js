export class MenuComponent extends HTMLElement {
    style = `<style>
    
    .wrapper {
        padding: 4rem 2rem;
    }
    
    .content h1, .content p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
    }
    
    .install-queue {
        list-style: none;
        font-size: 1.2rem;
        overflow: auto;
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
    <div class="wrapper">
        <div class="header">
        <h1>My Package List</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor dui habitant risus, sed etiam quam. 
            Vitae cras rhoncus hendrerit ultrices in aenean duis praesent. Tellus in faucibus massa euismod blandit. 
            Aliquet et neque nam eget viverra.</p>
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
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }
}