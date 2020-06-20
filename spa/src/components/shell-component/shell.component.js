export class ShellComponent {
  constructor(componentRef) {
    // this.registerSearchHandler();
    // this.registerScrollHandler();

    // this.shadowRoot.getElementById("mobile-fab").onclick = () => {
    //   window.navigationService.toggleMobileMenu();
    // }
    // this.shadowRoot.addEventListener("closeMobileMenu", this.closeMobileMenu);
    // this.shadowRoot.addEventListener("openMobileMenu", this.openMobileMenu);
    // this.isMenuOpen = false;
  }

  registerSearchHandler() {
    const input = this._shadow.getElementById("searchbox");
    input.addEventListener("keyup", (event) => {
      const filter = input.value;
      window.appListService.setFilter(filter);
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

  closeMobileMenu() {
    const menuRef = this.getElementById("menu")
    menuRef.classList.remove("open");
  }

  openMobileMenu() {
    const menuRef = this.getElementById("menu")
    menuRef.classList.add("open");
  }
}