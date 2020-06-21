export class AppDescriptionComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            const pRef = componentRef.shadowRoot.getElementById("desc");
            window.packageDetailsService.getContent()
                .then(content => {
                    pRef.innerHTML = content[0].description;
                });
        }
    }
}