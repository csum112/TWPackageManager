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
        <link href="/assets/fontawesome/css/all.css" rel="stylesheet">
        <div class="cover">
          <a href="#" class="back-button">
            <i class="fas fa-angle-left fa-3x"></i>
          </a>

          <div class="content">
            <h1>vlc</h1>
          </div>
        </div>
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
            
            border-radius: 2rem 2rem 0rem 0rem;
            background: linear-gradient(114.42deg, ${this._getColor()} 0%, ${this._getColor()} 50%, ${this._getColor()} 100%);
          }

          .back-button{
            position: absolute;
            top: 30%;
            left: 5%;
            transform: translate(-50%, -50%);
            
            padding-left: 3rem;
            color: #35D9D8;
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
        </style>
        `;

    }

}