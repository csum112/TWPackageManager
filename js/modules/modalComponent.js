export class ModalComponent extends HTMLElement {
	style = `
<style>
	div.modal 
	{
		z-index: 100;
		left: 0;
		top: 0;
		position: fixed;
		background: #ffffff;
		box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
		border-radius: 32px;
	}
</style>
`;

	template = `
<div class="modal">
	<h1>Hello</h>
</div>
`;

	constructor() {
		super();
		this._shadow = this.attachShadow({ mode: "open" });
		this._shadow.innerHTML = this.style + this.template;
	}
}
