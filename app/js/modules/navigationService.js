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
        console.log(history.state)
        if(history.state.mobileMenuOpen == true) {
            console.log("We should close the menu")
            history.back();
            this.toggleMobileMenu();
        } else console.log("We should navigate somewhere")
    }
}