import { createRouter, createWebHistory } from "vue-router";
import MyDetails from "../pages/MyDetails.vue"
import CreateDetails from "../pages/CreateDetails.vue"


    const  routes = [
        {
            path: "/",
            component: CreateDetails,
            name: "CreateDetails",
        },
        {
            path: "/details",
            component: MyDetails,
            name: "MyDetails",
        }
    ];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
