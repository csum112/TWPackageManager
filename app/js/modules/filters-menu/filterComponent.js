export class FilterComponent extends HTMLElement {

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
      text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
  }
  
  .filter-shell {
      margin-top: 2rem;
      margin-bottom: 5rem;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
      color: #fff;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: lighter;
  }
  
  #sort-label{
      margin-right: 24rem;
      font-size: 25px;
  }
  
  .ordering{
      display: flex;
    position: relative;
      flex-direction: row;
      width: 30rem;
      justify-content: space-between;
  }
  
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
      border-radius: 12.5px;
  }
  
  
  #sortby{
      width: 20rem;
  }
  
  #addfilter{
      width: 30rem;
  }
  
  #ascu{
      width: 5rem;
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
      background-color: #252a41;
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
  }
    
  .dropdown-content a {
      color: white;
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
  
  .filterc {
      display: flex;
      flex-direction: row;
      width: 30rem;
      height: 10rem;
      flex-wrap: wrap;
      align-content: flex-start;
  }
  
  .resetapply{
      display: flex;
    position: relative;
      flex-direction: row;
      width: 30rem;
      justify-content: space-between;
      font-size: 25px;
      bottom: 0px;
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
  
      .logo {
          left: 27px;
      }
  
  }
    </style>`;

  template = `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">

    <script src="/js/main.js" type="module"></script>
<div class="main-wrapper">
  <div class="filter-shell">
    <div class="logo">DEmI</div>
    <h1>FILTERS</h1>
    <p id="sort-label">Sort By: </p>
    <div class="ordering">
      <div class="dropdown">
        <button class="dropbtn" id="sortby">
          <p>Name</p>
          <i class="fas fa-caret-down"></i>
        </button>
        <div class="dropdown-content" style="left:0;">
          <a href="#">Namew</a>
          <a href="#">f21</a>
          <a href="#">f33</a>
        </div>
      </div>

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
    </div>
    <div class="dropdown">
      <button class="dropbtn" id="addfilter">
        <p>Add a filter</p>
        <i class="fas fa-caret-down"></i>
      </button>
      <div class="dropdown-content" style="left:0;">
        <a href="#">fi1</a>
        <a href="#">f21</a>
        <a href="#">f33</a>
      </div>
    </div>
    <div class="filterc">

      <dm-filter-tag>
        <span slot="filter-name">
          adasdasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </span>
      </dm-filter-tag>

      <dm-filter-tag>
        <span slot="filter-name">
          adb
        </span>
      </dm-filter-tag>

      <dm-filter-tag>
        <span slot="filter-name">
          adasdas32aa
        </span>
      </dm-filter-tag>

      <dm-filter-tag>
        <span slot="filter-name">
          a
        </span>
      </dm-filter-tag>

      <dm-filter-tag>
        <span slot="filter-name">
          fil
        </span>
      </dm-filter-tag>

      <dm-filter-tag>
        <span slot="filter-name">
          tru
        </span>
      </dm-filter-tag>

      <dm-filter-tag>
        <span slot="filter-name">
          baa
        </span>
      </dm-filter-tag>

    </div>
    <div class="resetapply">
      <p>Reset All</p>
      <p>Apply</p>
    </div>
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