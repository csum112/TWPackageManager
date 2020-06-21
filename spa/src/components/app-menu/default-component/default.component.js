export class DefaultComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            const buttonRef = componentRef.shadowRoot.getElementById("back-button");
            const mobileFabRef = componentRef.shadowRoot.getElementById("mobile-fab");
            const func = eval(componentRef.getAttribute("onButtonClick"));
            
            buttonRef.onclick = () => {
                window.navigationService.goBack();
            }
            mobileFabRef.onclick = func;
        }
    }

}