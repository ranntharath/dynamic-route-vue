import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import ProductPage from "../pages/ProductPage.vue";
import About from "../pages/About.vue";
import ProductDetail from "../pages/ProductDetail.vue";


const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/product",
        name: "Product",
        component: ProductPage,
    },
    {
        path: '/product/:id',
        name: 'ProductDetails',
        component: ProductDetail
    },
    {
        path: "/about",
        name: "About",
        component: About,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;