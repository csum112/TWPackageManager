import * as ShellModule from './components/shell-component/shell.module'
import * as AppListModule from './components/app-list-component/app-list.module'
import * as AppMenuModule from './components/app-menu/app-menu.module';
import * as AppInfoModule from './components/app-menu/info-component/app-info.module';
import * as AppDescriptionModule from './components/app-menu/description-component/app-description.module';
import * as AppDependenciesModule from './components/app-menu/dependencies-component/app-dependencies.module';
import * as AppCoverModule from './components/app-menu/cover-component/app-cover.module';
import * as CheckoutModule from './components/app-menu/checkout-component/checkout.module';

import * as DefaultTemplateComponent from './components/miscellaneous-pages/default-template-component/default-template.module';
import * as WelcomeModule from './components/miscellaneous-pages/welcome-component/welcome.module'
import * as NavComponent from './components/miscellaneous-pages/nav-component/nav.module';
import * as ContactComponent from './components/miscellaneous-pages/contact-component/contact.module';
import * as AboutComponent from './components/miscellaneous-pages/about-component/about.module';


DefaultTemplateComponent.forRoot();
WelcomeModule.forRoot();
NavComponent.forRoot();
ContactComponent.forRoot();
AboutComponent.forRoot();

AppListModule.forRoot();
ShellModule.forRoot();
AppMenuModule.forRoot();
AppInfoModule.forRoot();
AppDescriptionModule.forRoot();
AppDependenciesModule.forRoot();
AppCoverModule.forRoot();
CheckoutModule.forRoot();