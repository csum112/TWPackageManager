export class DropDownComponent extends HTMLElement {

    style = `
    <style>
    .dropbtn {
        background-color: #252a41;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        color: white;
        border: none;
        font-size: 21px;
        cursor: pointer;
        padding-left: 5%;
        padding-right: 5%;
    }
    .dropdown {
        position: relative;
        display: inline-block;
        border-bottom: 2px solid #894EC6;
        margin-bottom: 25px;
    }
      
    .dropdown-content {
        display: none;
        position: absolute;
        right: 0;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
      
    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
      
    .dropdown-content a:hover {background-color: #894EC6;}
    
    .dropdown:hover .dropdown-content {
        display: block;
    }
      
    .dropdown:hover .dropbtn {
        background-color: #3b3f54;
    }
    </style>`;

    template = `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">

    <div class="dropdown">
              <button class="dropbtn" id="ascu">
                <p>Asc</p> 
                <i class="fas fa-caret-down"></i>
              </button>
              <div class="dropdown-content" style="left:0;">
                <a href="#">Asc</a>
                <a href="#">Desc</a>
                <a href="#">f33</a>
              </div>
    </div>
  `;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.innerHTML = this.style + this.template;
    }

}