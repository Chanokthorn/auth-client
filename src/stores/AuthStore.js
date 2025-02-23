import { ref } from "vue";
import { defineStore } from "pinia";
import AuthService from "@/services/AuthService";

export const AuthStore = defineStore("authenStore", () => {
    const isAuthenticated = ref(false);
    const user = ref(null);

    const fetchUserProfile = async () => {
        try {
            const data = await AuthService.getUserProfile();
            if (data) {
                isAuthenticated.value = true;
                user.value = data;
                return true;
            }
            return false
        } catch (error) {
            console.error("Error fetching user profile: ", error);
            throw error;
        }
    }

    const logout = () => {
        isAuthenticated.value = false;
        user.value = null;
        // temporary method of clearing the cookie
        document.cookie = "access-token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;";
    }

    return {
        isAuthenticated,
        user,
        fetchUserProfile,
        logout
    }
})