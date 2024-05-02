import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../view/Home.vue"),
  },
  {
    path: "/booking",
    component: () => import("../view/Booking.vue"),
  },
  {
    path: "/diy",
    component: () => import("../view/Diy.vue"),
  },
  {
    path: "/detail",
    component: () => import("../view/Detail.vue"),
  },
  {
    path: "/diyDetail",
    component: () => import("../view/DiyDetail.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
