import template from './app-description.component.html';
import style from './app-description.component.css';
import { AppDescriptionComponent } from './app-description.component';
import { ComponentDecorator } from '../../../shared/ComponentDecorator';

export function forRoot() {
    ComponentDecorator(
        AppDescriptionComponent,
        {
            selector: 'app-description',
            template: template,
            style: style
        }
    );
}