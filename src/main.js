import { createApp } from "vue";
import { createPinia } from "pinia";

// axios
import VueAxios from "vue-axios";
import axios from "axios";

//  app & router
import App from "./App.vue";
import router from "./router";

// css
import "@/main.css";

// appButton
import AppButton from "@/components/AppButton.vue";
import AppLink from "@/components/AppLink.vue";
import AppCountInput from "@/components/AppCountInput.vue";
import { PiniaHistoryPlugin } from "@/plugins/PiniaHistoryPlugin";

const app = createApp(App);
const pinia = createPinia();

pinia.use(PiniaHistoryPlugin);

app.component("AppButton", AppButton);
app.component("AppLink", AppLink);
app.component("AppCountInput", AppCountInput);

app.use(VueAxios, axios);
app.use(pinia);
app.use(router);
app.provide("axios", app.config.globalProperties.axios);

app.mount("#app");
