export class PackageDetailsService {
    constructor() {
        this.currentPackage = null;
    }
    setCurrentPackage(packageName) {
        this.currentPackage = packageName;
    }

    async getContent() {
        let repo = window.distroService.getDistro();
        let req = await fetch(`/api/${repo}/package?packageName=${this.currentPackage}`);
        let reqData = req.json();
        return reqData;
    }
}