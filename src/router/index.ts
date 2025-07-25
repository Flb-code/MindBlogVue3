import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/auth",
      component: () => import("@/views/Authentication.vue"),
      redirect: "/auth/login",
      children: [
        {
          path: "login",
          component: () => import("@/components/auth/Login.vue"),
        },
        {
          path: "register",
          component: () => import("@/components/auth/Register.vue"),
        },
      ],
    },
    {
      path: "/article",
      component: () => import("@/views/Article.vue"),
      redirect: "/article/list",
      children: [
        {
          path: "list",
          component: () => import("@/components/article/BlogList.vue"),
        },
        {
          path: "reading",
          component: () => import("@/components/article/Reading.vue"),
        },
      ],
    },
    {
      path: "/write",
      component: () => import("@/views/Write.vue"),
    },
  ],
});

export default router;
