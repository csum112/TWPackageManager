export class AppInfoComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            const pRefVer = componentRef.shadowRoot.getElementById("version");
            const pRefHome = componentRef.shadowRoot.getElementById("homepage");
            window.packageDetailsService.getContent()
                .then(content => {
                    pRefVer.innerHTML = pRefVer.innerHTML + content[0].version;
                    pRefHome.innerHTML = pRefHome.innerHTML +
                        '<a href="' + content[0].maintainer + '" target="_blank">' + content[0].maintainer + '</a>';
                });
        }
    }
}