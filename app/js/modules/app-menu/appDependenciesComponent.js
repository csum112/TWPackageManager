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
            <ul id="tg">
            </ul>
        </div>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
        const ulRef = this.shadowRoot.getElementById("tg");
        window.packageDetailsService.getContent()
            .then(content => {
                content.data.dependencies.forEach(dep => {
                    let node = document.createElement("li");
                    node.appendChild(document.createTextNode(dep));
                    ulRef.appendChild(node);
                })
            })
    }

} 