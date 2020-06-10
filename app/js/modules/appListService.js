export class AppListService {
  constructor() {
    this.filter = {prefix: ""};
    this.fetchPackages().then((list) => {
      this.list = list;
      this.refresh();
    });
  }



  getPackages() {
    if(this.list != null)
      return this.list;
    else return [];
  }

  refresh() {
    const appList = document.getElementById("applist");
    if (appList != null) 
      appList.dispatchEvent(new Event("app_list_updated"));
  }

  async fetchPackages() {
    const req = await fetch(`/api/brew/packages?prefix=${this.filter.prefix}`);
    const reqJson = await req.json();
    return reqJson.data;
  }

  async setFilter(newFilter) {
    this.filter.prefix = newFilter;
    this.list = await this.fetchPackages();
    console.log(this.list)
    this.refresh();
  }
}
