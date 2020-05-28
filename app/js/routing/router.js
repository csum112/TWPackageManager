export class Router {
  constructor() {
    this.routes = [];
  }

  get(uri, callback) {
    const route = { uri, callback };
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
        return route.callback.call(this, req);
      }
    });
    if(!matched) console.log("404")
  }
}
