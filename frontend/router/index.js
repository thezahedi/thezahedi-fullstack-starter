import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",

    routes: [
        {
            path: "/",
            name: "home",
            component: () => import("../views/Home"),
        },

        {
            path: "*",
            name: "not-found",
            redirect: {name: "home"},
        }
    ],
});
