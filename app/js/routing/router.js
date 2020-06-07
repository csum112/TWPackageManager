export class Router {
  constructor() {
    this.routes = [];
  }

  get(uri, templateSelector, title, mobileMenuOpen) {
    const route = { uri, templateSelector, title, mobileMenuOpen};
    this.routes.push(route);
  }

  _buildRoute(uri) {
    let regEx = new RegExp(`^${uri}$`);
    return regEx;
  }

  init() {

    let path = window.location.pathname;
    console.log(path)
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
        history.pushState(state, route.title, path);
        history.pushState({}, '', '');
        history.back();
        if(route.mobileMenuOpen && !window.navigationService.mobileMenuIsOpen)
          window.navigationService.toggleMobileMenu();
        return true;
      }
    });
    if(!matched)
      this.navigateTo("/");
  }
}

function handleRouteChange(event)
{
  const root = document.getElementById("root");
  const lastChild = root.lastElementChild;
  if (lastChild != null && lastChild.tagName != "TEMPLATE")
      root.removeChild(lastChild)

  const templateID = event.state.template;
  const templateNode = document.getElementById(templateID).content.cloneNode(true);
  root.appendChild(templateNode);
}

function handlePackageRoute(event) {
  const args = event.state.prevUrl.split("/");

  const packageName = args[2];
  const tab = args[3];

  const root = document.getElementById("root");
  const lastChild = root.lastElementChild;
  if (lastChild != null && lastChild.tagName != "TEMPLATE")
      root.removeChild(lastChild)

  const templateID = event.state.template;
  const templateNode = document.getElementById(templateID).content.cloneNode(true);
  // console.log(templateNode)
  root.appendChild(templateNode); 
}

export function handleHistoryStateChange (event) {
  if(event.type == "popstate" && event.state.template !== undefined) 
  {        
      if(event.state.template == "mainPackage")
          handlePackageRoute(event)
      else handleRouteChange(event);
  }
}