import { ThumbnailComponent } from "/js/modules/thumbnailComponent.js";
import { AppListComponent } from "/js/modules/appListComponent.js";
import { ShellComponent } from "/js/modules/shellComponent.js";
import { DefaultComponent } from "/js/modules/app-menu/defaultComponent.js";
import { MenuComponent } from "/js/modules/menuComponent.js";
import { AppCoverComponent } from "/js/modules/app-menu/appCoverComponent.js";
import { AppDescriptionComponent } from "/js/modules/app-menu/appDescriptionComponent.js";
import { AppInfoComponent } from "/js/modules/app-menu/appInfoComponent.js";
import { AppDependenciesComponent } from "/js/modules/app-menu/appDependenciesComponent.js";
import { CheckoutComponent } from "/js/modules/checkout-menu/checkoutComponent.js";
import { Router } from "/js/routing/router.js";
import { injectRoutes } from "/js/routing/routes.js";
import { AppListService } from "/js/modules/appListService.js";
import { NavigationService } from "/js/modules/navigationService.js";


customElements.define("dm-thumbnail", ThumbnailComponent);
customElements.define("dm-app-list", AppListComponent);
customElements.define("dm-shell", ShellComponent);
customElements.define("dm-default", DefaultComponent);
customElements.define("dm-menu", MenuComponent);
customElements.define("dm-app-cover", AppCoverComponent);
customElements.define("dm-description", AppDescriptionComponent);
customElements.define("dm-info", AppInfoComponent);
customElements.define("dm-dependencies", AppDependenciesComponent);
customElements.define("dm-checkout", CheckoutComponent);

window.appListService = new AppListService();
const router = new Router();
injectRoutes(router);
router.init();
window.router = router;
window.navigationService = new NavigationService();
window.onhashchange = (ev) => {console.log(ev)}
window.onpopstate = (event) => {
    console.log(event);
    if(event.type == "popstate" && event.state.template !== undefined) {
        const root = document.getElementById("root");
        const lastChild = root.lastElementChild;
        if (lastChild != null && lastChild.tagName != "TEMPLATE")
            root.removeChild(lastChild)

        const templateID = event.state.template;
        const templateNode = document.getElementById(templateID).content.cloneNode(true);
        console.log(templateNode)
        root.appendChild(templateNode);
    }
}