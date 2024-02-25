import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
//pinia
import { createPinia } from "pinia";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
});
const pinia = createPinia();

app.use(pinia);
app.use(vuetify);
app.mount("#app");
