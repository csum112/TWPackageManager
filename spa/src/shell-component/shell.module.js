import { ComponentDecorator } from "../shared/ComponentDecorator";
import { ShellComponent } from "./shell.component";
import template from "./shell.component.html";
import style from "./shell.component.css";


export function forRoot() {
    ComponentDecorator(
        ShellComponent,
        {
            template: template,
            style: style,
            selector: 'shell-component'
        }
    )
}
