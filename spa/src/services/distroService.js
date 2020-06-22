export class DistroService {
    constructor() {}

    setDistro(distro) {
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