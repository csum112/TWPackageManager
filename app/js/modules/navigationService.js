export class NavigationService {
    constructor() {
        this.isMobile = (window.innerWidth <= 720);
        this.mobileMenuIsOpen = false;
        this.routerRef = window.router;
    }

    toggleMobileMenu() {
        const shellRef = document.querySelector("dm-shell").shadowRoot;
        if (this.mobileMenuIsOpen) {
            shellRef.dispatchEvent(new CustomEvent("closeMobileMenu", { composed: true, bubbles: true }));
        } else {
            shellRef.dispatchEvent(new CustomEvent("openMobileMenu", { composed: true, bubbles: true }));
        }
        this.mobileMenuIsOpen = !this.mobileMenuIsOpen;
    }

    getPreviousRoute(path) {
        const routes = path.split("/").filter(e => e != "");
        routes.pop();
        let newPath = "";
        routes.forEach(r => {
            newPath = newPath + "/" + r;
        });
        return newPath;
    }

    goBack() {
        if (window.location.pathname === "/" && this.isMobile) {
            this.toggleMobileMenu();
        } else {
            const newRoute = this.getPreviousRoute(window.location.pathname);
            window.router.navigateTo(newRoute);
        }
    }

}