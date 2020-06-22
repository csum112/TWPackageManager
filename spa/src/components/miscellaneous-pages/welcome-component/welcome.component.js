export class WelcomeComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            const distroList = [
                componentRef.shadowRoot.getElementById("debian"),
                componentRef.shadowRoot.getElementById("arch"),
                componentRef.shadowRoot.getElementById("centos")
            ];

            distroList.forEach(distro => {
                distro.onclick = () => window.distroService.setDistro(distro.id);
            });
        }
    }
}