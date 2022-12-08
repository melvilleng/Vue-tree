import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone, faFolder } from "@fortawesome/free-solid-svg-icons";

library.add(faPhone, faFolder);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
