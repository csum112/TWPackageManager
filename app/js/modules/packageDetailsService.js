export class PackageDetailsService {
    constructor() {
        this.currentPackage = null;
        this.setMock();
    }
    setCurrentPackage(packageName) {
        this.currentPackage = packageName;
      }

    setMock() {
        
    }
}