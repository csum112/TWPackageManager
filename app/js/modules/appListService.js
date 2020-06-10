export class AppListService {
  constructor() {
    this.filter = "";
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
    const req = await fetch("/api/brew/packages");
    const reqJson = await req.json();
    return reqJson.data;
  }

  setFilter(newFilter) {
    this.filter = newFilter;
    this.refresh();
  }
}
