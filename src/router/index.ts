import { createRouter, createWebHistory } from "vue-router";
import MemberList from '@/components/MemberList.vue';
import MemberProfile from '@/components/MemberProfile.vue';


const routes = [
    { path: '/', component: MemberList, name: 'list' },
    { path: '/member/', component: MemberProfile, name: 'profile' },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;
