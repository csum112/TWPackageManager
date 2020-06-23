export class AppInfoComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            const pRefVer = componentRef.shadowRoot.getElementById("version");
            const pRefHome = componentRef.shadowRoot.getElementById("homepage");
            window.packageDetailsService.getContent()
                .then(content => {
                    pRefVer.innerHTML = pRefVer.innerHTML + content.version;
                    pRefHome.innerHTML = pRefHome.innerHTML +
                        '<a href="' + content.maintainer + '" target="_blank">' + content.maintainer + '</a>';
                });
        }
    }
}