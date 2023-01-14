import { createWebHistory, createRouter } from "vue-router";
import WeddingPlanners from "@/components/WeddingPlanners.vue";
import WeddingProperties from "@/components/WeddingProperties.vue";
import HomePage from "@/components/HomePage.vue";
const routes = [
  {
    path: "/",
    name: "/HomePage",
    component: HomePage,
  },
  {
    path: "/WeddingPlanners",
    name: "WeddingPlanners",
    component: WeddingPlanners,
  },
  {
    path: "/WeddingProperties",
    name: "WeddingProperties",
    component: WeddingProperties,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;