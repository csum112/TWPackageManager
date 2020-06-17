import { ComponentDecorator } from "../shared/ComponentDecorator";
import { ThumbnailComponent } from "./thumbnail.component";
import template from "./thumbnail.component.html";
import style from "./thumbnail.component.css";


export function forRoot() {
    ComponentDecorator(
        ThumbnailComponent,
        {
            template: template,
            style: style,
            selector: 'thumbnail-component'
        }
    )
}
