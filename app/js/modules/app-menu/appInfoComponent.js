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
                font-family: 'Roboto', sans-serif;
                font-style: normal;
                font-weight: normal;
            }

        </style>
    `;


    _getTemplate = (homepage="none", version="none") => `
        <link href="https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight&display=swap" rel="stylesheet" />

        <article>
            <p><strong>Version:</strong>${version}</p>
            <p><strong>Homepage:</strong>${homepage}</p>
        </article>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        window.packageDetailsService.getContent()
            .then(content => { this._shadow.innerHTML = this.style + this._getTemplate(content.data.homepage); })
    }

} 