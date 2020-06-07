export class MenuComponent extends HTMLElement {
    style = `<style>
    
    .wrapper {
        padding: 4rem 2rem;
    }
    
    .header h1, .header p {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: lighter;
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
    <link href="https://fonts.googleapis.com/css?family=Zilla+Slab+Highlight&display=swap" rel="stylesheet" />
    <div class="wrapper">
        <div class="header">
            <h1>My Package List</h1>
        </div>

        <ul class="install-queue" id="basket">
           
        </ul>
    </div>
    `;

    constructor() {
        super();
        this._shadow = this.attachShadow({ mode: "open" });
        this._shadow.innerHTML = this.style + this.template;
        this.listRef = this.shadowRoot.getElementById("basket");
        this.populateList();
    }

    populateList() {
        const newList = window.basketService.list;
        newList.forEach(pkg => {
            let newNode = document.createElement("li");
            let icon = document.createElement("i");
            icon.classList.add("fas");
            icon.classList.add("fa-check");
            let textNode = document.createTextNode(pkg);
            newNode.appendChild(icon);
            newNode.appendChild(textNode);
            this.listRef.appendChild(newNode)
        });
    }
}

{/* <li><i class="fas fa-check"></i>bison</li> */}