export class AppDescriptionComponent extends HTMLElement {

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
                font-weight: lighter;
            }

        </style>
    `;


    getTemplate = (content) => `
    <link href="https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight&display=swap" rel="stylesheet" />
    <article id="content">
        <p>${content}</p>
    </article>
`;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        window.packageDetailsService.getContent()
            .then(content => {
                console.log(content.data)
                this._shadow.innerHTML = this.style + this.getTemplate(content.data.desc);
            })
    }

} 