export class AppDependenciesComponent extends HTMLElement {

    style = `
        <style>
            
            .dep-list {
                position: relative;
                display: inline-block;
                max-height: 40vh;
                overflow-y: auto;
                padding: 2rem;
            }

            ul > li {
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: normal;
            }

        </style>
    `;


    template = `
        <link href="https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight&display=swap" rel="stylesheet" />

        <div class="dep-list">
            <ul>
                <li>alsa-lib-1.2.2</li>
                <li>desktop-file-utils-0.24</li>
                <li>FFmpeg-4.2.3</li>
                <li>liba52-0.7.4</li>
                <li>libgcrypt-1.8.5</li>
                <li>libmad-0.15.1b</li>
                <li>Lua-5.3.5</li>
            </ul>
        </div>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
    }

} 