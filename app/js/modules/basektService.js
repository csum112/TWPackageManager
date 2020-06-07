export class BasketService {
    constructor() {
        const storedBasket = localStorage.getItem("myBasket");
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
}