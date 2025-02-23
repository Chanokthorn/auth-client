<script setup>
// import { signinUsernamePassword, signout } from '@/services/authService'
import { PageProfile } from '@/router'
import authService from '@/services/AuthService'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const apiKey = ref('')
const username = ref('')
const password = ref('')
const isLoading = ref(false)

// read redirect query parameter
const redirect = new URLSearchParams(window.location.search).get('redirect')
const router = useRouter();

const handleLogin = async () => {
    isLoading.value = true
    try {
        const success = await authService.signinUsernamePassword(apiKey.value, username.value, password.value)
    } catch {
        console.error('Login failed')
        return
    }
    isLoading.value = false

    if (redirect && redirect !== "") {
        window.location.href = redirect
    } else {
        router.push({name: PageProfile})
    }
}

</script>
<template>
    <div>
        <h1>Sign-in</h1>
        <div v-if="isLoading">Loading...</div>
        <form class="signin-form" @submit.prevent="handleLogin">
            <input type="text" v-model="apiKey" placeholder="API Key" />
            <input type="text" v-model="username" placeholder="Username" />
            <input type="password" v-model="password" placeholder="Password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<style scoped>
.signin-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    margin: 0 auto;
}
</style>