export class AppDescriptionComponent {
    constructor() {
        window.packageDetailsService.getContent()
            .then(content => {
                console.log(content.data)
                this.content = content.data.desc;
            });
    }
}