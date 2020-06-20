import * as ShellModule from './components/shell-component/shell.module'
import * as AppListModule from './components/app-list-component/app-list.module'
import * as AppMenuModule from './components/app-menu/app-menu.module';
import * as AppInfoModule from './components/app-menu/info-component/app-info.module';
import * as AppDescriptionModule from './components/app-menu/description-component/app-description.module';
import * as AppDependenciesModule from './components/app-menu/dependencies-component/app-dependencies.module';
import * as AppCoverModule from './components/app-menu/cover-component/app-cover.module';
import * as CheckoutListModule from './components/app-menu/checkout-list-component/checkout-list.module';
import * as CheckoutModule from './components/app-menu/checkout-component/checkout.module';

import * as DefaultTemplateModule from './components/miscellaneous-pages/default-template-component/default-template.module';
import * as WelcomeModule from './components/miscellaneous-pages/welcome-component/welcome.module'
import * as NavModule from './components/miscellaneous-pages/nav-component/nav.module';
import * as ContactModule from './components/miscellaneous-pages/contact-component/contact.module';
import * as AboutModule from './components/miscellaneous-pages/about-component/about.module';


import { Router } from './routing/router.js';
import { handleHistoryStateChange } from './routing/router.js';
import { injectRoutes } from './routing/routes.js';

import { AppListService } from './services/appListService.js';
import { BasketService } from './services/basketService.js';
import { DistroService } from './services/distroService.js';
import { NavigationService } from './services/navigationService.js';
import { PackageDetailsService } from './services/packageDetailsService.js';



window.appListService = new AppListService();
window.basketService = new BasketService();
window.distroService = new DistroService();
window.navigationService = new NavigationService();
window.packageDetailsService = new PackageDetailsService();


DefaultTemplateModule.forRoot();
WelcomeModule.forRoot();
NavModule.forRoot();
ContactModule.forRoot();
AboutModule.forRoot();

AppListModule.forRoot();
ShellModule.forRoot();
AppMenuModule.forRoot();
AppInfoModule.forRoot();
AppDescriptionModule.forRoot();
AppDependenciesModule.forRoot();
AppCoverModule.forRoot();
CheckoutListModule.forRoot();
CheckoutModule.forRoot();


const router = new Router();
injectRoutes(router);
router.init();
window.router = router;
window.onpopstate = handleHistoryStateChange;