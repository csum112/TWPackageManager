export class PackageDetailsService {
    constructor() {
        this.currentPackage = null;
    }
    setCurrentPackage(packageName) {
        this.currentPackage = packageName;
    }

    async getContent() {
        //let repo = window.distroService.getDistro();
        //let req = await fetch(`/api/${repo}/package?packageName=${this.currentPackage}`);
        let req = await fetch(`http://localhost:3000/packages/${this.currentPackage}`);
        let reqData = await req.json();
        //console.log(reqData);
        return reqData;
    }
}