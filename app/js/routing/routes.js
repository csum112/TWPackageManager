const routes = [
    {
        path: "/",
        title: "DeMi",
        templateSelector: "mainMenu",
        mobileMenuOpen: false
    },
    {
        path: "/checkout",
        title: "Check out",
        templateSelector: "mainCheckout",
        mobileMenuOpen: true

    },
    {
        path: "/package/([A-z]|[0-9])*/description",
        templateSelector: "mainPackage",
        mobileMenuOpen: true
    },
    {
        path: "/package/([A-z]|[0-9])*/info",
        templateSelector: "mainPackage",
        mobileMenuOpen: true
    },
    {
        path: "/package/([A-z]|[0-9])*/dependencies",
        templateSelector: "mainPackage",
        mobileMenuOpen: true
    }
];


export function injectRoutes(router) {
    routes.forEach(route => {
        router.get(route.path, route.templateSelector, route.title, route.mobileMenuOpen);
    });
};