export class Router {
  constructor() {
    this.routes = [];
  }

  get(uri, templateSelector, title) {
    const route = { uri, templateSelector, title };
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
        const state = {template: route.templateSelector, prevUrl: window.location.pathname};
        history.pushState(state, route.title, route.uri);
        history.pushState({}, '', '');
        history.back();
      }
    });
    if(!matched)
      this.navigateTo("/");
  }
}
