export class CheckoutListComponent {
    constructor(componentRef) {
        componentRef.onViewLoad = () => {
            const mobileFabRef = componentRef.shadowRoot.getElementById("mobile-fab");
            this.listRef = componentRef.shadowRoot.getElementById("basket");
            
            mobileFabRef.onclick = () => {
                window.router.navigateTo("/checkout");
            };
            this.populateList();
        }
    }

    populateList() {
        const newList = window.basketService.list;
        newList.forEach(pkg => {
            let newNode = document.createElement("li");
            let icon = document.createElement("i");

            icon.classList.add("fas");
            icon.classList.add("fa-check");
            icon.onmouseenter = () => {
                icon.classList.add("fa-trash");
                icon.classList.remove("fa-check");
            }
            icon.onmouseleave = () => {
                icon.classList.remove("fa-trash");
                icon.classList.add("fa-check");
            }
            icon.onclick = () => {
                window.basketService.removePackage(pkg);
                this.listRef.removeChild(newNode);
            }
            let textNode = document.createTextNode(pkg);
            newNode.appendChild(icon);
            newNode.appendChild(textNode);
            this.listRef.appendChild(newNode);
        });
    }
}