export class DistroService {
    constructor() {}

    setDistro(distro) {
        window.basketService.emptyBasket();
        localStorage.setItem("distro", distro);
        window.appListService.setFilter("");
        window.router.navigateTo("/");
    }

    getDistro() {
        return localStorage.getItem("distro");
    }

    isSet() {
        return this.getDistro() != null;
    }

}