import { app } from "../../src/index";

window.addEventListener("DOMContentLoaded", domReadyHandler);

function domReadyHandler() {
  window.removeEventListener("DOMContentLoaded", domReadyHandler);
  document.body.appendChild(app.view);
}

window.callSDK = () => {};
