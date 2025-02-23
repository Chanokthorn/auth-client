<script setup>
import AuthGuard from '@/components/AuthGuard.vue';
import { PageSignIn } from '@/router';
import AuthService from '@/services/authService';
import { AuthStore } from '@/stores/AuthStore';
import { useRouter } from 'vue-router';

const authStore = AuthStore();
const router = useRouter();

const onSignoutClicked = async () => {
    try {
        await AuthService.signout()
    } catch (error) {
        console.log("unable to signout:", error)
    }
    router.push({name: PageSignIn})
}

</script>
<template>
    <AuthGuard>
        <div class="profile-view">
            <h1>Welcome, {{ authStore.user.name }}</h1>
            <button @click="onSignoutClicked">Sign out</button>
        </div>
    </AuthGuard>
</template>
<style scoped>
.profile-view {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
}
</style>