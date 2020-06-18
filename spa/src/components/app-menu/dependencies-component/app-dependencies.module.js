import template from './app-dependencies.component.html';
import style from './app-dependencies.component.css';
import { AppDependenciesComponent } from './app-dependencies.component';
import { ComponentDecorator } from '../../../shared/ComponentDecorator';

export function forRoot() {
    ComponentDecorator(
        AppDependenciesComponent,
        {
            selector: 'app-dependencies',
            template: template,
            style: style
        }
    );
}