

export class AppListComponent extends HTMLElement {
	_getStyle() {
		return `
		<style>
			ul {
				list-style: none;
				display: flex;
				padding-top: 16px;
				margin: 0;
				padding-left: 0;
				justify-content: center;
				align-content: flex-start;
				flex-flow: row wrap;
				overflow-y: auto;
				width: 100%;
			}

			li {
				box-sizing: content-box;
			}
		</style>
			`;
	}
	constructor() {
		super();
		this._shadow = this.attachShadow({ mode: "open" });
		this._shadow.innerHTML = this._getStyle();
		this._nodeList = document.createElement("ul");
		this._shadow.appendChild(this._nodeList);

		this.addEventListener("app_list_updated", () => {
			this._resetList();
			this._pullListFromService();
		});
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
		if (window.appListService != null) {
			const list = window.appListService.getPackages()

			list.forEach((packageName) => {
				this._addPackage(packageName);
			});
		}
	}
}
