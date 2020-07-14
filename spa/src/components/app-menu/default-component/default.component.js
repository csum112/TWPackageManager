export class DefaultComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            const buttonRef = componentRef.shadowRoot.getElementById("back-button");
            const mobileFabRef = componentRef.shadowRoot.getElementById("mobile-fab");
            
            buttonRef.onclick = () => {
                window.navigationService.goBack();
            }
            mobileFabRef.onclick = () => {
                window.basketService.addCurrentToBasket();
            };
        }
    }

}