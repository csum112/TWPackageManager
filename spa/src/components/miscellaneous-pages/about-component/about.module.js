import template from './about.component.html';
import style from './about.component.css';
import { AboutComponent } from './about.component';
import { ComponentDecorator } from '../../../shared/ComponentDecorator';

export function forRoot() {
    ComponentDecorator(
        AboutComponent,
        {
            selector: 'about-component',
            template: template,
            style: style
        }
    );
}