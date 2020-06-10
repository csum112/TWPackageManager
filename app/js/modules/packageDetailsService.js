export class PackageDetailsService {
    constructor() {
        this.currentPackage = null;
    }
    setCurrentPackage(packageName) {
        this.currentPackage = packageName;
    }

    async getContent() {
        let req = await fetch(`/api/brew/package?packageName=${this.currentPackage}`);
        let reqData = req.json();
        return reqData;
    }
}