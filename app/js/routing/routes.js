const routes = [
    {
        path: "/",
        callback: (req) => {
            const root = document.getElementById("root");
            const template = document.getElementById("mainMenu").content.cloneNode(true);
            root.appendChild(template);
          }
    },
    {
        path: "/checkout",
        callback: (req) => {
            const root = document.getElementById("root");
            const template = document.getElementById("mainCheckout").content.cloneNode(true);
            root.appendChild(template);
        }
    }
];


export function injectRoutes(router) {
    routes.forEach(route => {
        router.get(route.path, route.callback);
    });
};