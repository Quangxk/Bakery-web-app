import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseItem from "./components/UI/BaseItem.vue";
import BlackButton from "./components/UI/BlackButton.vue";
import WhiteButton from "./components/UI/WhiteButton.vue";
import BaseDesc from "./components/UI/BaseDesc.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { createPinia } from "pinia";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BasePage from "./components/UI/BasePage.vue";
/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faAddressBook);
const app = createApp(App);
app.component("base-desc", BaseDesc);
app.component("base-item", BaseItem);
app.component("black-button", BlackButton);
app.component("white-button", WhiteButton);
app.component("base-page", BasePage);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);
app.mount("#app");
