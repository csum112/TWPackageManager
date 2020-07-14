import template from './app-cover.component.html';
import style from './app-cover.component.css';
import { AppCoverComponent } from './app-cover.component';
import { ComponentDecorator } from '../../../shared/ComponentDecorator';

export function forRoot() {
    ComponentDecorator(
        AppCoverComponent,
        {
            selector: 'app-cover',
            template: template,
            style: style
        }
    );
}