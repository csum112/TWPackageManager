export class Router {
  constructor() {
    this.routes = [];
  }

  get(uri, templateSelector, title, mobileMenuOpen) {
    const route = { uri, templateSelector, title, mobileMenuOpen };
    this.routes.push(route);
  }

  _buildRoute(uri) {
    let regEx = new RegExp(`^${uri}$`);
    return regEx;
  }

  init() {
    let path = window.location.pathname;
    console.log(`[Router] the path is: ${path}`)
    this.navigateTo(path);
  }

  navigateTo(path) {
    if (!window.distroService.isSet()) {
      path = "/welcome";
    }
    let matched = false;
    this.routes.some((route) => {
      let regEx = this._buildRoute(route.uri)
      if (path.match(regEx)) {
        matched = true;

        const state = { template: route.templateSelector, url: path };
        history.pushState(state, route.title, path);
        history.pushState({}, '', '');
        history.back();
        if (route.mobileMenuOpen && !window.navigationService.mobileMenuIsOpen)
          window.navigationService.toggleMobileMenu();
        return true;
      }
    });
    if (!matched)
      this.navigateTo("/");
  }
}

function handleRouteChange(event) {
  const root = document.getElementById("root");
  const lastChild = root.lastElementChild;
  if (lastChild != null && lastChild.tagName != "TEMPLATE")
    root.removeChild(lastChild)

  const templateID = event.state.template;
  const templateNode = document.getElementById(templateID).content.cloneNode(true);
  root.appendChild(templateNode);
}

function handlePackageRoute(event) {
  let args = event.state.url.split("/");

  let packageName = args[2];
  let tab = args[3];
  window.packageDetailsService.setCurrentPackage(packageName);

  let root = document.getElementById("root");
  let lastChild = root.lastElementChild;
  if (lastChild != null && lastChild.tagName != "TEMPLATE")
    root.removeChild(lastChild)

  let templateID = event.state.template;
  let templateNode = document.getElementById(templateID).content.cloneNode(true);
  root.appendChild(templateNode);
}

export function handleHistoryStateChange(event) {
  if (event.type == "popstate" && event.state.template !== undefined) {
    if (event.state.template.includes("mainPackage"))
      handlePackageRoute(event)
    else handleRouteChange(event);
  }
}