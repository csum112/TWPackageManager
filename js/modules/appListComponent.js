import { AppListService } from "/js/modules/appListService.js";

export class AppListComponent extends HTMLElement {
	_getStyle() {
		return `
		<style>
			ul {
				list-style: none;
				display: flex;
				justify-content: flex-start;
				align-content: flex-start;
				flex-flow: row wrap;
				overflow-y: auto;
			}

			li {
				height: calc(6rem + 2rem);
				margin: calc(1rem) calc(1rem);
				box-sizing: content-box;
			}
		</style>
			`;
	}
	constructor() {
		super();
		this._appListService = new AppListService();
		this._shadow = this.attachShadow({ mode: "open" });
		this._shadow.innerHTML = this._getStyle();
		this._nodeList = document.createElement("ul");
		this._shadow.appendChild(this._nodeList);

		this.addEventListener("app_list_updated", () => {
			this._resetList();
			this._pullListFromService();
		});
	}

	getService() {
		return this._appListService;
	}

	_addPackage(packageName) {
		const newLI = document.createElement("li");
		newLI.innerHTML = `<dm-thumbnail packageName='${packageName}'></dm-thumbnail>`;
		this._nodeList.appendChild(newLI);
	}

	_resetList() {
		while (this._nodeList.firstChild != null)
			this._nodeList.removeChild(this._nodeList.firstChild);
	}

	_pullListFromService() {
		if (this._appListService != null) {
			this._appListService.getPackages().then((list) => {
				list.forEach((packageName) => {
					this._addPackage(packageName);
				});
			});
		}
	}
}
