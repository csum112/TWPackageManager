export class NavComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            const navList = [
                componentRef.shadowRoot.getElementById("browse"),
                componentRef.shadowRoot.getElementById("welcome"),
                componentRef.shadowRoot.getElementById("contact"),
                componentRef.shadowRoot.getElementById("about")
            ];
            navList.forEach(nav => {
                nav.onclick = () => {
                    if (nav.id == "browse") {
                        window.router.navigateTo("/");
                    } else {
                        window.router.navigateTo("/" + nav.id);
                    }
                }
            });
        }
    }
}