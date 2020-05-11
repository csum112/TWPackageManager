export class AppListService {
  constructor() {
    this.filter = "";
    this.fetchPackages().then((list) => {
      this.list = list;
      this.refresh();
    });
  }

  async getPackages() {
    return this.list.filter((name) => name.includes(this.filter));
  }

  refresh() {
    document
      .getElementById("applist")
      .dispatchEvent(new Event("app_list_updated"));
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
