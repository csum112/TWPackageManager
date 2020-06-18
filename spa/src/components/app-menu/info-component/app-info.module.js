import template from './app-info.component.html';
import style from './app-info.component.css';
import { AppInfoComponent } from './app-info.component';
import { ComponentDecorator } from '../../../shared/ComponentDecorator';

export function forRoot() {
    ComponentDecorator(
        AppInfoComponent, 
        {
            selector: 'app-info',
            template: template,
            style: style
        }
    );
}