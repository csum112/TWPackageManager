export class PackageDetailsService {
    constructor() {
        this.currentPackage = null;
    }
    setCurrentPackage(packageName) {
        this.currentPackage = packageName;
    }

    async getContent() {
        let distro = window.distroService.getDistro();
        //let req = await fetch(`/api/${repo}/package?packageName=${this.currentPackage}`);
        let req = await fetch(`/api/${distro}/packages/${this.currentPackage}`);
        let reqData = await req.json();
        console.log(`[PackageDetailsService] Request contents: ${reqData}`);
        return reqData;
    }
}