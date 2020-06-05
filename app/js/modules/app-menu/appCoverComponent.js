export class AppCoverComponent extends HTMLElement {

    // these should be the colours of the selected app instead
    _getColor() {
        return (
          "hsl(" +
          360 * Math.random() +
          "," +
          (25 + 70 * Math.random()) +
          "%," +
          (65 + 10 * Math.random()) +
          "%)"
        );
    }

    constructor() {
        super();
        //this.packageName = this.getAttribute("packageName");
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = this._getStyle() + this._getTemplate();
    }

    _getTemplate() {
        return `
          <div class="cover">
            <div class="content">
              <h1>vlc</h1>
            </div>
          </div>

          <ul class="tabs">
            <li><h3><a href="#">Description<a></h3></li>
            <li><h3><a href="#">Info<a></h3></li>
            <li><h3><a href="#">Dependecies<a></h3></li>
          </ul>

          <hr>

          <slot name="app-content"></slot>
        `;
    }

    _getStyle() {
        return `
          <style>
            .cover {
              position: relative;
              width: 100%;
              height: 12rem;
              left: 0px;
              top: 0px;
              
              border-radius: 1rem 1rem 0rem 0rem;
              background: linear-gradient(114.42deg, ${this._getColor()} 0%, ${this._getColor()} 50%, ${this._getColor()} 100%);
            }

            .content {
              position: absolute;
              top: 55%;
              left: 50%;
              transform: translate(-50%, -50%);
            
              font-family: Roboto;
              font-style: normal;
              font-weight: normal;
              font-size: 1.5rem;
            
              color: #FFFFFF;
            
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }

            .tabs {
              display: flex;
              list-style-type: none;
              margin: 0;
              padding-top: 1rem;
              justify-content: space-between;
            }

            .tabs h3 {
                display: inline;
                font-family: Roboto;
                font-style: normal;
                font-weight: normal;
            }

            .tabs a:link, .tabs a:visited, .tabs a:hover, .tabs a:active {
                text-decoration: none;
            }

            hr {
                width: 85%;
            }

            @media (max-width: 720px), (orientation:portrait) {
        
              .cover {
                border-radius: 0rem;
              }
  
          }
            
          </style>
        `;

    }

}