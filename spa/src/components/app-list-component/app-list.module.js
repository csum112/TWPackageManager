import { ComponentDecorator } from "../../shared/ComponentDecorator";
import { AppListComponent } from "./app-list.component";
import * as ThumbnailModule from "./thumbnail-component/thumbnail.module"
import style from "./app-list.component.css";


export function forRoot() {

    ThumbnailModule.forRoot();
    ComponentDecorator(
        AppListComponent,
        {
            template: '',
            style: style,
            selector: 'app-list-component'
        }
    )
}
