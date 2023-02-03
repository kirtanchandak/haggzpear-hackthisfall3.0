import { createApp } from "vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";
import App from "./App.vue";
import Grid from "./components/Grid.vue";
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";
import Feature from "./components/Feature.vue";
import Test from "./components/Test.vue";

const app = createApp(App);
app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);
app.component("Test", Test);

app.use(StoryblokVue, {
  accessToken: "xXqcPjdT6K1NrmXb23LFGgtt",
  bridge: process.env.NODE_ENV !== "production", // optimizes by excluding the bridge on production
  use: [apiPlugin],
  apiOptions: {
    timeout: 5,
  },
});

app.mount("#app");
