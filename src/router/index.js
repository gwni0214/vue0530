import { createRouter, createWebHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import AboutView from "../views/AboutView.vue";
import ReferView from "../views/ReferView.vue";
import YoutubeView from "../views/YoutubeView.vue";
import MovieView from "../views/MovieView.vue";
import ContactView from "../views/ContactView.vue";
import PortView from "../views/PortView.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/refer",
    name: "refer",
    component: ReferView,
  },
  {
    path: "/youtube",
    name: "youtube",
    component: YoutubeView,
  },
  {
    path: "/movie",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/port",
    name: "port",
    component: PortView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
