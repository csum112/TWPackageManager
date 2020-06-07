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
        templateSelector: "mainPackageDescription",
        mobileMenuOpen: true
    },
    {
        path: "/package/([A-z]|[0-9])*/info",
        templateSelector: "mainPackageInfo",
        mobileMenuOpen: true
    },
    {
        path: "/package/([A-z]|[0-9])*/dependencies",
        templateSelector: "mainPackageDependencies",
        mobileMenuOpen: true
    }
];


export function injectRoutes(router) {
    routes.forEach(route => {
        router.get(route.path, route.templateSelector, route.title, route.mobileMenuOpen);
    });
};