import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router"
import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";
import store from './store';


loadFonts();

const app = createApp(App);
app.use(bottomNavigationVue)
app.use(store);
app.use(router);
app.use(vuetify);
app.mount("#app");
