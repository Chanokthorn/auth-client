import { AUTH_API_URL } from '@/config.js';

const signinUsernamePassword = async (apiKey, username, password) => {
    try {
        const response = await fetch(`${AUTH_API_URL}/signin/username_password`, {
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

const signout = () => {
    localStorage.removeItem('user');
};

// const register = async (username, email, password) => {
//     const response = await axios.post(`${API_URL}/register`, { username, email, password });
//     return response.data;
// };

// const getCurrentUser = () => {
//     return JSON.parse(localStorage.getItem('user'));
// };

const AuthService = {
    signinUsernamePassword,
    signout,
    // register,
    // getCurrentUser
};

export default AuthService;
