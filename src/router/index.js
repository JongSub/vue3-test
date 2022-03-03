import { createWebHistory, createRouter } from "vue-router";

import Main from "../views/Main.vue";
import Stock from "../views/Stock.vue";

const routes = [
    {
        path: "/",
        name: "Main",
        component: Main,
    },
    {
        path: "/stock",
        name: "Stock",
        component: Stock,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
