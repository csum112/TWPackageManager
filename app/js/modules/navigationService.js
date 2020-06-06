export class NavigationService {
    constructor() {
        this.isMobile = ( window.innerWidth <= 720 ) && window.orientation !== undefined && window.orientation == 'portrait';
        this.mobileMenuIsOpen = false;
        this.routerRef = window.router;
    }

    toggleMobileMenu() {
        const shellRef = document.querySelector("dm-shell").shadowRoot;
        if(this.mobileMenuIsOpen) {
            shellRef.dispatchEvent(new CustomEvent("closeMobileMenu", {composed: true, bubbles: true}));
        } else {
            shellRef.dispatchEvent(new CustomEvent("openMobileMenu", {composed: true, bubbles: true}));
            history.pushState({mobileMenuOpen: true}, "Opened mobile menu")
        }
        this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    }

    goBack() {
        if(history.state != null)
            if(history.state.mobileMenuOpen == true) {
                console.log("We should close the menu")
                this.toggleMobileMenu();
            } else {
                history.go(-2);
                console.log(history.state)
                if(history.state.uri !== undefined) {
                    // const uri = history.state.uri;
                    // window.router.navigateTo(uri)
                }
            }
    }
}