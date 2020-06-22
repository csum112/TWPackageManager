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
        let port;
        if (distro == "debian") {
            port = 3002;
        } else if (distro == "arch") {
            port = 3001;
        } else if (distro == "centos") {
            port = 3000;
        }
        let req = await fetch(`http://localhost:${port}/packages/${this.currentPackage}`);
        let reqData = await req.json();
        //console.log(reqData);
        return reqData;
    }
}