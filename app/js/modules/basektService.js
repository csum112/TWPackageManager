export class BasketService {

    apiURI = "/api/brew/checkout";

    constructor() {
        const storedBasket = localStorage.getItem("myBasket");
        this.script = null;
        if (storedBasket == null) this.list = [];
        else
            this.list = storedBasket.split(",");
    }

    addCurrentToBasket() {
        let packageName = window.packageDetailsService.currentPackage;
        if (!this.list.includes(packageName)) {
            this.list.push(packageName);
        }
        localStorage.setItem("myBasket", this.list);
        window.navigationService.goBack();
    }

    removePackage(packageName) {
        this.list = this.list.filter(pkg => pkg !== packageName);
        localStorage.setItem("myBasket", this.list);
    }

    async createScript() {
        let resp = await fetch(this.apiURI, {
            method: "POST",
            body: JSON.stringify({
              packageNames: this.list  
            })
        });
        let script = await resp.json();
        return script.data;
    }
}