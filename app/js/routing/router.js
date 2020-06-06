export class Router {
  constructor() {
    this.routes = [];
  }

  get(uri, callback, title) {
    const route = { uri, callback, title };
    this.routes.push(route);
  }

  _buildRoute(uri) {
    let regEx = new RegExp(`^${uri}$`);
    return regEx;
  }

  init() {

    let path = window.location.pathname;
    this.navigateTo(path);
  }

  navigateTo(path) {
    console.log("Going to " + path)
    let matched = false;
    this.routes.some((route) => {
      let regEx = this._buildRoute(route.uri)
      if (path.match(regEx)) {
        matched = true;
        let req = { path };
        const root = document.getElementById("root");
        const lChild = root.lastElementChild;
        if(lChild.tagName != "TEMPLATE")
          root.removeChild(lChild);
        history.pushState({uri: route.uri}, route.title, route.uri);
        document.title = route.title;
        return route.callback.call(this, req);
      }
    });
    if(!matched)
      this.navigateTo("/");
  }
}
