import { ThumbnailComponent } from "/js/modules/thumbnailComponent.js";
import { AppListComponent } from "/js/modules/appListComponent.js";
import { ShellComponent } from "/js/modules/shellComponent.js";
import { FilterComponent } from "/js/modules/filterComponent.js";
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
import { handleHistoryStateChange } from "./routing/router.js";


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
customElements.define("dm-filter", FilterComponent);



window.appListService = new AppListService();
window.navigationService = new NavigationService();
const router = new Router();
injectRoutes(router);
router.init();
window.router = router;

window.onpopstate = handleHistoryStateChange