export class CheckoutComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            window.basketService.createScript().then(script => {
                //console.log(script);
                const scriptRef = componentRef.shadowRoot.getElementById("script");
                scriptRef.innerHTML = script;
            });
        }
    }
}