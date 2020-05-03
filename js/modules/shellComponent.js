export class ShellComponent extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.innerHTML = this._getStyle() + this._getTemplate();
    this.registerSearchHandler();
  }

  registerSearchHandler() {
    const input = this._shadow.getElementById("searchbox");
    input.addEventListener("keyup", (event) => {
      const filter = input.value;
      document.getElementById("applist").getService().setFilter(filter);
    });
  }

  _getStyle() {
    return `
      <style>
      main {
          top: 32px;
          position: relative;
          height: calc(100vh - 64px);
          width: calc((100vh - 64px) * 1.61);
          box-sizing: border-box;
          display: flex;
          flex-wrap: nowrap;
          justify-content: center;
      }
      
      .force {
          padding: 0px 0px;
          margin: 0px 0px;
          box-sizing: border-box;
          max-height: 100vh;
      }
      
      .golden-bigger {
          width: 61%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
      }
      
      .content::-webkit-scrollbar
      {
          visibility: hidden;
      
      }
      
      .golden-smaller {
          width: 39%;
          min-width: calc(100vh * 0.39);
      }
      
      .content {
          overflow-y: auto;
          height: 90%;
      }
      
      .menu {
          background: #ffffff;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04),
              0px 2px 6px rgba(0, 0, 0, 0.04),
              0px 10px 20px rgba(0, 0, 0, 0.04);
          border-radius: 32px;
      }
      
      .logo {
          position: relative;
          width: 162px;
          height: 77px;
          left: 32px;
          top: 32px;
          font-family: Zilla Slab Highlight;
          font-style: normal;
          font-weight: bold;
          font-size: 64px;
          line-height: 77px;
          color: rgba(202, 204, 219, 0.3);
          text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
      }
      
      .searchbox-wrapper {
          width: 100%;
          display: flex;
          justify-content: center;
      }
      
      .searchbox {
          background: #3B3F54;
          border-radius: 16px;
          width: 61%;
          height: 56px;
          margin-top: 64px;
          display: flex;
          justify-content: center;
          margin-bottom: 2rem;
      }
      
      .searchbox > input {
          background: none;
          border: none;
          height: 100%;
          width: 100%;
          font-family: Roboto;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 21px;
          color: #CACCDB;
          margin-left: 2rem;
      }
      
      .searchbox > input:focus {
          outline: none;
      }
      
      .dots:nth-of-type(1) {
          opacity: 0.25;
      
          position: absolute;
          bottom: 0%;
          left: 5%;
          z-index: -1;
      }
      
      .dots:nth-of-type(2) {
          opacity: 0.25;
          position: absolute;
          bottom: 0%;
          right: 5%;
          z-index: -1;
      }
      
      .dots:nth-of-type(3) {
          opacity: 0.25;
          position: absolute;
          top: 10%;
          left: 10%;
          z-index: -1;
      }
      </style>
          `;
  }
  _getTemplate() {
    return `
      <main>
      <div class="force golden-bigger">
          <div class="header">
              <div class="logo">
                  DEmI
              </div>
              <div class="searchbox-wrapper">
                  <div class="searchbox">
                      <input id="searchbox" type="text" placeholder="Search package name" />
                  </div>
              </div>
          </div>
          <div class="content">
              <slot name="left"></slot>
          </div>
      </div>
      <div class="menu force golden-smaller">
        <slot name="right"></slot>
      </div>
  </main>
  <img class="dots" src="/assets/svg/Dots.svg" alt="Decoration">
  <img class="dots" src="/assets/svg/Dots.svg" alt="Decoration">
  <img class="dots" src="/assets/svg/Dots.svg" alt="Decoration">
  `;
  }
}
