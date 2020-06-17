import { ComponentDecorator } from "../shared/ComponentDecorator";
import {WelcomeComponent} from "./welcome.component";
import template from "./welcome.component.html";
import style from "./welcome.component.css";


export function forRoot() {
    ComponentDecorator(
        WelcomeComponent,
        {
            template: template,
            style: style,
            selector: 'welcome-component'
        }
    )
}
