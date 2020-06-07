export class AppListService {
  constructor() {
    this.filter = "";
    this.currentPackage = null;
    this.fetchPackages().then((list) => {
      this.list = list;
      this.refresh();
    });
  }

  getPackages() {
    if(this.list != null)
      return this.list.filter((name) => name.includes(this.filter));
    else return [];
  }

  refresh() {
    const appList = document.getElementById("applist");
    if (appList != null) 
      appList.dispatchEvent(new Event("app_list_updated"));
  }

  async fetchPackages() {
    const req = await fetch("/assets/mock/packages.json");
    const list = await req.json();
    return list;
  }

  setFilter(newFilter) {
    this.filter = newFilter;
    this.refresh();
  }
}
