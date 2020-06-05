export class AppInfoComponent extends HTMLElement {

    style = `
        <style>
            
            article {
                position: relative;
                display: inline-block;
                max-height: 40vh;
                overflow-y: auto;
                padding: 2rem;
            }

            p {
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
            }

        </style>
    `;


    template = `
        <article>
            <p><strong>Version:</strong> 3.0.8-0+deb9u1</p>
            <p><strong>Tag:</strong> video</p>
            <p><strong>Mainteiner:</strong> Debian Multimedia Maintainers <pkg-multimedia-maintainers@lists.alioth.debian.org></p>
            <p><strong>Homepage:</strong> http://www.videolan.org/vlc/</p>
            <p><strong>Installed-Size:</strong> 230 kB</p>
            <p><strong>Download-Size:</strong> 139 kB</p>
        </article>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }

} 