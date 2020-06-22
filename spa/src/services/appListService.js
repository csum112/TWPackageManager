export class AppListService {
  constructor() {
    this.filter = { prefix: "" };
    this.fetchPackages().then((list) => {
      this.list = list;
      this.refresh();
    });
  }

  getPackages() {
    if (this.list != null)
      return this.list;
    else return [];
  }

  refresh() {
    const appList = document.getElementById("applist");
    if (appList != null)
      appList.dispatchEvent(new Event("app_list_updated"));
  }

  async fetchPackages() {
    let distro = window.distroService.getDistro();
    console.log(distro);
    //const req = await fetch(`/api/${distro}/packages?prefix=${this.filter.prefix}`);
    let port;
    if (distro == "debian") {
      port = 3002;
    } else if (distro == "arch") {
      port = 3001;
    } else if (distro == "centos") {
      port = 3000;
    }
    const req = await fetch(`http://localhost:${port}/packages`);
    const reqJson = await req.json();
    //console.log(reqJson);
    return reqJson;
  }

  async setFilter(newFilter) {
    this.filter.prefix = newFilter;
    this.list = await this.fetchPackages();
    this.refresh();
  }
}
