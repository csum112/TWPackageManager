const routes = [
    {
        path: "/",
        title: "DeMi",
        callback: (req) => {
            const root = document.getElementById("root");
            const template = document.getElementById("mainMenu").content.cloneNode(true);
            root.appendChild(template);
          }
    },
    {
        path: "/checkout",
        title: "Check out",
        callback: (req) => {
            const root = document.getElementById("root");
            const template = document.getElementById("mainCheckout").content.cloneNode(true);
            root.appendChild(template);
        }
    }
];


export function injectRoutes(router) {
    routes.forEach(route => {
        router.get(route.path, route.callback, route.title);
    });
};