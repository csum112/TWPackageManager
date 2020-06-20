export class DefaultComponent {
    constructor(componentRef) {
        const buttonRef = componentRef.shadowRoot.getElementById("back-button");
        // buttonRef.onclick = () => {
        //     console.log("something");
        //     window.navigationService.goBack();
        // }
        
        const mobileFabRef = componentRef.shadowRoot.getElementById("mobile-fab");
        const func = eval(componentRef.getAttribute("onButtonClick"));
        // mobileFabRef.onclick = func;
    }

}