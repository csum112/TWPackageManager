export class Router {
  constructor() {
    this.routes = [];
  }

  get(uri, callback, title) {
    const route = { uri, callback, title };
    this.routes.push(route);
  }

  init() {
    let matched = false;
    this.routes.some((route) => {
      let regEx = new RegExp(`^${route.uri}$`);
      let path = window.location.pathname;

      if (path.match(regEx)) {
        matched = true;
        let req = { path };
        document.title = route.title;
        return route.callback.call(this, req);
      }
    });
    if(!matched) this.navigateTo("/")
  }

  navigateTo(path) {
    let matched = false;
    console.log("Going to " + path)
    this.routes.some((route) => {
      let regEx = new RegExp(`^${route.uri}$`);
      if (path.match(regEx)) {
        matched = true;
        let req = { path };
        const root = document.getElementById("root");
        const lChild = root.lastElementChild;
        if(root.children.length > 3)
          root.removeChild(lChild);
        history.pushState({}, route.title, route.uri);
        document.title = route.title;
        return route.callback.call(this, req);
      }
    });
  }
}
