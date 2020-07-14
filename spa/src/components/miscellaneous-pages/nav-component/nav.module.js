import template from './nav.component.html';
import style from './nav.component.css';
import { NavComponent } from './nav.component';
import { ComponentDecorator } from '../../../shared/ComponentDecorator';

export function forRoot() {
    ComponentDecorator(
        NavComponent,
        {
            selector: 'nav-component',
            template: template,
            style: style
        }
    );
}