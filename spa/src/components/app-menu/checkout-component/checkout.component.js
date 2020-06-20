export class CheckoutComponent {
    constructor() {
        window.basketService.createScript().then(script => {
            this.script = script;
        });
    }
}