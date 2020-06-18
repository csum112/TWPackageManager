import template from './contact.component.html';
import style from './contact.component.css';
import { ContactComponent } from './contact.component';
import { ComponentDecorator } from '../../../shared/ComponentDecorator';

export function forRoot() {
    ComponentDecorator(
        ContactComponent,
        {
            selector: 'contact-component',
            template: template,
            style: style
        }
    );
}