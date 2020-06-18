import * as ShellModule from './components/shell-component/shell.module'
import * as AppListModule from './components/app-list-component/app-list.module'
import * as AppMenuModule from './components/app-menu/app-menu.module';
import * as AppInfoModule from './components/app-menu/info-component/app-info.module';
import * as AppDescriptionModule from './components/app-menu/description-component/app-description.module';
import * as AppDependenciesModule from './components/app-menu/dependencies-component/app-dependencies.module';
import * as AppCoverModule from './components/app-menu/cover-component/app-cover.module';
import * as DefaultTemplateComponent from './components/miscellaneous-pages/default-template-component/default-template.module';
import * as WelcomeModule from './components/miscellaneous-pages/welcome-component/welcome.module'
import * as NavComponent from './components/miscellaneous-pages/nav-component/nav.module';

DefaultTemplateComponent.forRoot();
WelcomeModule.forRoot();
NavComponent.forRoot();


AppListModule.forRoot();
ShellModule.forRoot();
AppMenuModule.forRoot();
AppInfoModule.forRoot();
AppDescriptionModule.forRoot();
AppDependenciesModule.forRoot();
AppCoverModule.forRoot();