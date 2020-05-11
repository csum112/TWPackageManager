import { ThumbnailComponent } from "/js/modules/thumbnailComponent.js";
import { AppListComponent } from "/js/modules/appListComponent.js";
import { ShellComponent } from "/js/modules/shellComponent.js";
import { ModalComponent } from "/js/modules/modalComponent.js";
import { Router } from "/js/modules/router.js";
import { MenuComponent } from "/js/modules/menuComponent.js";

customElements.define("dm-thumbnail", ThumbnailComponent);
customElements.define("dm-app-list", AppListComponent);
customElements.define("dm-modal", ModalComponent);
customElements.define("dm-shell", ShellComponent);
customElements.define("dm-menu", MenuComponent);

const router = new Router();
router.get("/", (req) => {
  const root = document.getElementById("root");
  const template = document.getElementById("main").content.cloneNode(true);
  root.appendChild(template);
});

router.init();
