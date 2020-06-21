export class AppDependenciesComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            const ulRef = componentRef.shadowRoot.getElementById("tg");
            window.packageDetailsService.getContent()
                .then(content => {
                    content[0].depends.forEach(dep => {
                        let node = document.createElement("li");
                        node.appendChild(document.createTextNode(dep.packageName));
                        ulRef.appendChild(node);
                    });
                });
        }
    }
}