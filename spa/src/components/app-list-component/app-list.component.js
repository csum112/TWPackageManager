export class AppListComponent {
	constructor(componentRef) {
		componentRef.addEventListener("app_list_updated", () => {
			this._resetList();
			this._pullListFromService();
		});
		componentRef.onViewLoad = () => {
			this._nodeList = document.createElement("ul");
			componentRef.shadowRoot.appendChild(this._nodeList);
			this._pullListFromService()
		}
	}

	_addPackage(packageName) {
		const newLI = document.createElement("li");
		newLI.innerHTML = `<thumbnail-component packageName='${packageName}'></thumbnail-component>`;
		this._nodeList.appendChild(newLI);
	}

	_resetList() {
		while (this._nodeList.firstChild != null)
			this._nodeList.removeChild(this._nodeList.firstChild);
	}

	_pullListFromService() {
		if (window.appListService != null) {
			const list = window.appListService.getPackages()
			//const list = ["python", "hello", "world"];

			list.forEach((packageName) => {
				this._addPackage(packageName);
			});
		}
	}
}
