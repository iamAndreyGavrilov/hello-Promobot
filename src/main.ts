import { createApp } from "vue";
import App from "./App.vue";
import { GetPromobotInstance } from "./robot/robot-api";
import router from "./router";
import store from "./store";

GetPromobotInstance().then((api) => {
  createApp(App).use(store).use(router).mount("#app");
});
