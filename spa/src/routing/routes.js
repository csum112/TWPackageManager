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
        path: "/package/([A-z]|[0-9]|-|@|_|\.)*/description",
        templateSelector: "mainPackageDescription",
        mobileMenuOpen: true
    },
    {
        path: "/package/([A-z]|[0-9]|-|@|_|\.)*/info",
        templateSelector: "mainPackageInfo",
        mobileMenuOpen: true
    },
    {
        path: "/package/([A-z]|[0-9]|-|@|_|\.)*/dependencies",
        templateSelector: "mainPackageDependencies",
        mobileMenuOpen: true
    },
    {
        path: "/welcome",
        templateSelector: "welcome",
        mobileMenuOpen: true
    },
    {
        path: "/nav",
        templateSelector: "nav",
        mobileMenuOpen: true
    },
    {
        path: "/filters",
        templateSelector: "filters",
        mobileMenuOpen: true
    },
    {
        path: "/about",
        templateSelector: "about",
        mobileMenuOpen: true
    },
    {
        path: "/contact",
        templateSelector: "contact",
        mobileMenuOpen: true
    }
];


export function injectRoutes(router) {
    routes.forEach(route => {
        router.get(route.path, route.templateSelector, route.title, route.mobileMenuOpen);
    });
};