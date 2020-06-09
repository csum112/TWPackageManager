export class FilterComponent extends HTMLElement {

  style = `
    <style>
    
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
          width: 30rem;
      }
      
      #sort-label{
          margin-right: 75%;
          font-size: 25px;
      }
      
      .ordering{
          display: flex;
        position: relative;
          flex-direction: row;
          width: 100%;
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
          width: 100%;
      }
      
      
      #sortby{
          width: 66%;
      }
      
      #addfilter{
          width: 100%;
      }
      
      #ascu{
          width: 16%;
      }

      .dropdown {
          position: relative;
          display: inline-block;
          border-bottom: 2px solid #894EC6;
          margin-bottom: 25px;
          width: 100%;
      }
        
      .dropdown-content {
          display: none;
          position: absolute;
          right: 0;
          background-color: #252a41;
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
          width: 100%;
          height: 33%;
          flex-wrap: wrap;
          align-content: flex-start;
      }
      
      .resetapply{
          bottom: 2vh;
          display: flex;
          position: relative;
          flex-direction: row;
          justify-content: space-between;
          font-size: 25px;
          bottom: 0px;
          width:100%;
      }
  
      @media (max-width: 720px) and (orientation: portrait) {

          .filter-shell {
            margin-top: 0px;
            width: 19rem;
          }
    
      }

    </style>
  `;

  template = `
  <link href="/assets/fontawesome/css/all.css" rel="stylesheet">
  <script src="/js/main.js" type="module"></script>

  <div class="filter-shell">
    <h1>FILTERS</h1>
    <p id="sort-label">Sort By: </p>
    <div class="ordering">
      <div class="dropdown" id="sortby">
        <button class="dropbtn">
          <p>Name</p>
          <i class="fas fa-caret-down"></i>
        </button>
        <div class="dropdown-content" style="left:0;">
          <a href="#">Namew</a>
          <a href="#">f21</a>
          <a href="#">f33</a>
        </div>
      </div>

      <div class="dropdown" id="ascu">
        <button class="dropbtn">
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
    <div class="dropdown" id="addfilter">
      <button class="dropbtn">
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
          adasdasaaaaaaaaaaaaaaa
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
  `;

  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.innerHTML = this.style + this.template;
  }

}