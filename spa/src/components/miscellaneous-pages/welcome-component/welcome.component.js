export class WelcomeComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            const distroList = [
                componentRef.shadowRoot.getElementById("debian"),
                componentRef.shadowRoot.getElementById("ubuntu"),
                componentRef.shadowRoot.getElementById("centos")
            ];

            distroList.forEach(distro => {
                distro.onclick = () => window.distroService.setDistro(distro.id);
            });
        }
    }
}