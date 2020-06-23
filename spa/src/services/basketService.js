export class BasketService {

    constructor() {
        const storedBasket = localStorage.getItem("myBasket");
        this.script = null;
        if (storedBasket == null) this.list = [];
        else
            this.list = storedBasket.split(",").filter(pkg => pkg != '');
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

    emptyBasket() {
        this.list = [];
        localStorage.setItem("myBasket", this.list);
    }

    async createScript() {
        let distro = window.distroService.getDistro();
        let apiURI = `/api/${distro}/checkout`;
        //let apiURI = `http://localhost:3002/checkout`;
        let resp = await fetch(apiURI, {
            method: "POST",
            body: JSON.stringify(this.list)
        });
        let script = await resp.json();
        return script.data;
    }
}