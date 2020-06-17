import * as IndexModule from './some-component/index.module';
import * as WelcomeModule from './welcome-component/welcome.module'
import * as ThumbnailModule from './thumbnail-component/thumbnail.module'
import * as ShellModule from './shell-component/shell.module'
IndexModule.forRoot();
WelcomeModule.forRoot();
ThumbnailModule.forRoot();
ShellModule.forRoot();
