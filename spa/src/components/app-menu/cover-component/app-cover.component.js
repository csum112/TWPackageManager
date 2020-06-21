export class AppCoverComponent {
    _getColor() {
        return (
            "hsl(" +
            360 * Math.random() +
            "," +
            (25 + 70 * Math.random()) +
            "%," +
            (65 + 10 * Math.random()) +
            "%)"
        );
    }

    constructor(componentRef) {
        this.content = window.packageDetailsService.currentPackage;
        componentRef.onViewLoad = () => {
            this.initColor(componentRef);

            //const h3Refs = componentRef.shadowRoot.getElementsByTagName("h3");
            const descRef = componentRef.shadowRoot.getElementById("desc");
            const infoRef = componentRef.shadowRoot.getElementById("info");
            const depsRef = componentRef.shadowRoot.getElementById("deps");

            descRef.onclick = () => {
                this.navigateTo("description");
                // descRef.style.color = '#894EC6';
                // infoRef.style.color = 'black';
                // depsRef.style.color = 'black';
            }
            
            infoRef.onclick = () => {
                this.navigateTo("info");
                // infoRef.style.color = '#894EC6';
                // descRef.style.color = 'black';
                // depsRef.style.color = 'black';
            }

            depsRef.onclick = () => {
                this.navigateTo("dependencies");
                // depsRef.style.color = '#894EC6';
                // infoRef.style.color = 'black';
                // descRef.style.color = 'black';
            }
        }
    }

    initColor(componentRef) {
        let coverRef = componentRef.shadowRoot.querySelector('.cover');
        coverRef.style.background = `linear-gradient(114.42deg, ${this._getColor()} 0%, ${this._getColor()} 50%, ${this._getColor()} 100%)`;
    }

    navigateTo(tab) {
        let packageName = window.packageDetailsService.currentPackage;
        let route = "/package/" + packageName + "/" + tab;
        window.router.navigateTo(route);
    }
}