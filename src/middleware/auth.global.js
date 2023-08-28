import { useAuthStore } from '@/store/auth';

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore();

    if (!authStore.isLoggedIn && to.path === "/dashboard/") {
        return navigateTo("/");
    }
});