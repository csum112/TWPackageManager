const routes = [
    {
        path: "/",
        title: "DeMi",
        templateSelector: "mainMenu"
    },
    {
        path: "/checkout",
        title: "Check out",
        templateSelector: "mainCheckout"
    }
];


export function injectRoutes(router) {
    routes.forEach(route => {
        router.get(route.path, route.templateSelector, route.title);
    });
};