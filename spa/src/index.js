import * as WelcomeModule from './components/welcome-component/welcome.module'
import * as ShellModule from './components/shell-component/shell.module'
import * as AppListModule from './components/app-list-component/app-list.module'
import * as AppMenuModule from './components/app-menu/app-menu.module';
import * as AppInfoModule from './components/app-menu/info-component/app-info.module';
import * as AppDescriptionModule from './components/app-menu/description-component/app-description.module';
import * as AppDependenciesModule from './components/app-menu/dependencies-component/app-dependencies.module';
import * as AppCoverModule from './components/app-menu/cover-component/app-cover.module';


WelcomeModule.forRoot();

AppListModule.forRoot();
ShellModule.forRoot();
AppMenuModule.forRoot();
AppInfoModule.forRoot();
AppDescriptionModule.forRoot();
AppDependenciesModule.forRoot();
AppCoverModule.forRoot();