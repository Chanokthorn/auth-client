import { AUTH_API_URL } from '@/config.js';

const signinUsernamePassword = async (apiKey, username, password) => {
    try {
        const response = await fetch(`${AUTH_API_URL}/users/signin/username_password`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'X-API-KEY': apiKey
            },
            body: JSON.stringify({ username, password })
        });
    } catch (error) {
        console.error(error);
        throw new Error('Invalid username or password');
    }
    
    return
};

const getUserProfile = async () => {
    var response;
    try {
        response = await fetch(`${AUTH_API_URL}/users/profile`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    } catch (error) {
        console.error("Error fetching user profile: ", error);
        return null;
    }
    if(response.status !== 200) {
        console.error("Error fetching user profile: ", response);
        return null;
    }
    const data = await response.json();
    return data;
}

const signout = async () => {
    try {
        await fetch(`${AUTH_API_URL}/users/signout`, {
            method: 'POST',
            credentials: 'include'
        });
    } catch (error) {
        console.error(error);
        throw error;
    }

    return
};

const AuthService = {
    signinUsernamePassword,
    getUserProfile,
    signout,
};

export default AuthService;
