import Promobot from "promobot-api";
import { createApp } from "vue";
import App from "./App.vue";
import { GetPromobotInstance } from "./robot/robot-api";
import router from "./router";
import store from "./store";

declare global {
  export const QWebChannel: any;

  interface Window {
    RobotApi: Promobot;
  }
}

GetPromobotInstance().then((api) => {
  api.environmentService.get().then((env) => {
    console.log(env);
  });

  window.RobotApi = api;

  createApp(App).use(store).use(router).mount("#app");
});
