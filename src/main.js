import { createApp } from "vue";
import { createPinia } from "pinia";

// axios
import VueAxios from "vue-axios";

//  app & router
import App from "./App.vue";
import router from "./router";

import "@/main.css";
import axios from "axios";

const app = createApp(App);

app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

app.use(createPinia());
app.use(router);

app.mount("#app");
