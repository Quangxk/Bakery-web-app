import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BlackButton from "./components/UI/BlackButton.vue";
import WhiteButton from "./components/UI/WhiteButton.vue";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAddressBook } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(faUserSecret, faAddressBook);
const app = createApp(App);
app.component("black-button", BlackButton);
app.component("white-button", WhiteButton);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
