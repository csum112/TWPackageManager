import template from './checkout-list.component.html';
import style from './checkout-list.component.css';
import { CheckoutListComponent } from './checkout-list.component';
import { ComponentDecorator } from '../../../shared/ComponentDecorator';

export function forRoot() {
    ComponentDecorator(
        CheckoutListComponent,
        {
            selector: 'checkout-list-component',
            template: template,
            style: style
        }
    );
}