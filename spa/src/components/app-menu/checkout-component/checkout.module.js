import template from './checkout.component.html';
import style from './checkout.component.css';
import { CheckoutComponent } from './checkout.component';
import { ComponentDecorator } from '../../../shared/ComponentDecorator';

export function forRoot() {
    ComponentDecorator(
        CheckoutComponent,
        {
            selector: 'checkout-component',
            template: template,
            style: style
        }
    );
}