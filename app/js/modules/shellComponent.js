export class ShellComponent extends HTMLElement {
  constructor() {
    super();
    this._shadow = this.attachShadow({ mode: "open" });
    this._shadow.innerHTML = this._getStyle() + this._getTemplate();
    this.registerSearchHandler();
    this.registerScrollHandler();
    this.shadowRoot.getElementById("mobile-fab").onclick = () => {
        this.shadowRoot.dispatchEvent(new CustomEvent("toggleMenu", {composed: true, bubbles: true}))
    }
    this.shadowRoot.addEventListener("toggleMenu", this.toggleMobileMenu);
    this.isMenuOpen = false;
  }

  registerSearchHandler() {
    const input = this._shadow.getElementById("searchbox");
    input.addEventListener("keyup", (event) => {
      const filter = input.value;
      document.getElementById("applist").getService().setFilter(filter);
    });
  }

  registerScrollHandler() {
    this._headerRef = this._shadow.getElementById("toolbar");
    this.isToolBarHidden = false;
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        if (this.isToolBarHidden == false) {
          this._headerRef.classList.add("scrolled-header");
          this.isToolBarHidden = true;
        }
      } else {
        this._headerRef.classList.remove("scrolled-header");
        this.isToolBarHidden = false;
      }
    };
  }

  toggleMobileMenu() {
    const menuRef = this.getElementById("menu")
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) {
        menuRef.classList.add("open");
    } else {
        menuRef.classList.remove("open");
    }
  }

  _getStyle() {
    return `
    <link href="/assets/fontawesome/css/all.css" rel="stylesheet">
      <style>
      .logo {user-select: none;}

      .searchbox {
        background: #3B3F54;
        border-radius: 16px;
        height: 48px;
        display: flex;
        justify-content: center;
        margin-bottom: 2rem;
        width: 100%;
        margin-right: 32px;
    }

    .menu-fab{
        margin-left: 32px;
        margin-right: 16px;
        height: 50px;
        color: #3B3F54;
        z-index: 11;
        background: none;
        border: none;
    }

    .header-mobile-wrapper {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
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

      @media (min-width: 720px) and (orientation:landscape) {
      main {
          top: 32px;
          position: relative;
          height: calc(100vh - 64px);
          width: calc((100vh - 64px) * 1.61);
          max-width: 90vw;
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
          border-radius: 16px;
      }

      .mobile-fab {
          display: none;
      }

      .logo {
        position: relative;
        width: 162px;
        height: 77px;
        left: 32px;
        font-family: Zilla Slab Highlight;
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        color: rgba(202, 204, 219, 0.3);
        text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
    }
    }

    @media (max-width: 720px),(orientation:portrait){

        @keyframes go-up {
            from {
                transform: translateY(0);
            }
            to {
                transform: translateY(-128px);
            }
        }

        .header {
            transition: height 2s;
        }

        .scrolled-header .logo{
            animation: go-up 100ms forwards;
        }



        .scrolled-header {
            background-color: #252a41;
            height: 70px;
        }

        .scrolled-header .header-mobile-wrapper {
            position: fixed;
            top: 16px;

        }


        .header {
            position: fixed;
            top: 0%;
            left: 0%;
            width: 100vw;
            z-index: 10;
        }
        .golden-bigger {
            padding-top: 7rem;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .content {
            overflow-y: auto;
        }

        div.menu.golden-smaller {
            display: none;
        }
        div.menu.golden-smaller.open {
            display: block;
            background-color: #fff;
            width: 100vw;
            height: 100vh;
            z-index: 100;
            margin: 0 0;
            position: fixed;
            overflow-y: scroll;
            top: 0px;
            left: 0px;
        }

        .logo {
            position: relative;
            text-align: center;
            font-family: Zilla Slab Highlight;
            font-style: normal;
            font-weight: bold;
            font-size: 36px;
            line-height: 77px;
            color: rgba(202, 204, 219, 0.3);
            text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
        }
    }
    
    .searchbox-wrapper {
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .mobile-fab {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        height: 4rem;
        width: 4rem;
    }

    .mobile-fab:focus {
        outline: none;
        box-shadow: none;
      }

    .clip-button {
      color: #fff;
      background: #894EC6;
      padding: 1rem 1rem;
      border-radius: 1rem;
      border: none;
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.06);
    }
      </style>
          `;
  }
  _getTemplate() {
    return `
      <main>
      <div class="force golden-bigger">
          <div class="header" id="toolbar">
              <div class="logo">
                  DEmI
              </div>
        <div class="header-mobile-wrapper">
            <button class="menu-fab">
                <i class="fas fa-bars fa-2x"></i>
            </button>
        <div class="searchbox-wrapper">
            <div class="searchbox">
                <input id="searchbox" type="text" placeholder="Search package name" />
            </div>
        </div>
        </div>
          </div>
          <div class="content">
              <slot name="left"></slot>
          </div>
      </div>
      <div class="menu force golden-smaller" id="menu"> 
        <slot name="right"></slot>
      </div>
  </main>
  <button 
    class="mobile-fab clip-button"
    id="mobile-fab"
    >
        <i class="fas fa-shopping-cart fa-2x"></i>
  </button>
  `;
  }
}
