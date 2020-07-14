import template from './default-template.component.html';
import style from './default-template.component.css';
import { DefaultTemplateComponent } from './default-template.component';
import { ComponentDecorator } from '../../../shared/ComponentDecorator';

export function forRoot() {
    ComponentDecorator(
        DefaultTemplateComponent,
        {
            selector: 'default-template',
            template: template,
            style: style
        }
    );
}