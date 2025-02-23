<script setup>
import { AuthStore } from '@/stores/AuthStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { PageSignIn } from '@/router';

const authStore = AuthStore();
const router = useRouter();

onMounted( async () => {
    try {
        const fetchProfileSuccess = await authStore.fetchUserProfile()
        if (!fetchProfileSuccess) {
            router.push({ name: PageSignIn });
        }
    } catch (e) {
        console.log(e);
        router.push({ name: PageSignIn });
    }
});
</script>
<template>
    <div>
        <slot v-if="authStore.isAuthenticated"></slot>
        <p v-else>Redirecting...</p>
    </div>
</template>