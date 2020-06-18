import { ComponentDecorator } from "../../../shared/ComponentDecorator";
import { DefaultComponent } from "./default.component";
import template from './default.component.html';
import style from "./default.component.css";


export function forRoot() {

    ComponentDecorator(
        DefaultComponent,
        {
            template: template,
            style: style,
            selector: 'default-component'
        }
    )
}
