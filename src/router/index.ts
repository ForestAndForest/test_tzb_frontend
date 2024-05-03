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
  {
    path: "/me",
    component: () => import("../view/Me.vue"),
  },
  {
    path: "/shopping",
    component: () => import("../view/ShoppingCart.vue"),
  },
  {
    path: "/diyForm",
    component: () => import("../view/DiyForm.vue"),
  },
  {
    path: "/share",
    component: () => import("../components/Share.vue"),
  },
  {
    path: "/shareDetail",
    component: () => import("../view/ShareDetail.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
