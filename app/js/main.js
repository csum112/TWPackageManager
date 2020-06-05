import { ThumbnailComponent } from "/js/modules/thumbnailComponent.js";
import { AppListComponent } from "/js/modules/appListComponent.js";
import { ShellComponent } from "/js/modules/shellComponent.js";
import { DefaultComponent } from "/js/modules/defaultComponent.js";
import { MenuComponent } from "/js/modules/menuComponent.js";
import { AppMenuComponent } from "/js/modules/app-menu/appMenuComponent.js"
import { AppCoverComponent } from "/js/modules/app-menu/appCoverComponent.js";
import { CheckoutComponent } from "/js/modules/checkout-menu/checkoutComponent.js";
import { WelcomeComponent } from "/js/modules/welcome/welcomeComponent.js";
import { Router } from "/js/routing/router.js";
import {injectRoutes} from "/js/routing/routes.js"

customElements.define("dm-thumbnail", ThumbnailComponent);
customElements.define("dm-app-list", AppListComponent);
customElements.define("dm-shell", ShellComponent);
customElements.define("dm-default", DefaultComponent);
customElements.define("dm-menu", MenuComponent);
customElements.define("dm-app-menu", AppMenuComponent);
customElements.define("dm-app-cover", AppCoverComponent);
customElements.define("dm-checkout", CheckoutComponent);
customElements.define("dm-welcome", WelcomeComponent);

const router = new Router();
injectRoutes(router);
router.init();
// router.navigateTo("/checkout")