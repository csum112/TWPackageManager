export class AppDependenciesComponent {
    constructor(componentRef) {
        const ulRef = componentRef.shadowRoot.getElementById("tg");
        window.packageDetailsService.getContent()
            .then(content => {
                content.data.dependencies.forEach(dep => {
                    let node = document.createElement("li");
                    node.appendChild(document.createTextNode(dep));
                    ulRef.appendChild(node);
                });
            });
    }
}