import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response.data,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            const refresh = localStorage.getItem('refresh_token');
            if (!refresh) {
                // If no refresh token, just reject without redirecting
                // This prevents guest users from being forced to signin
                return Promise.reject(error);
            }
            try {
                const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
                const response = await axios.post(`${baseURL}/login/refresh/`, { refresh });
                localStorage.setItem('access_token', response.data.access);
                return api(originalRequest);
            } catch (refreshError) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                // Only redirect if they were actually trying to visit a protected route
                // or if we really need them to login. 
                // For now, let's keep it simple: if refresh fails, they are logged out.
                window.location.href = '/signin';
                return Promise.reject(refreshError);
            }
        }
        const message = error.response?.data?.detail || error.message || 'An error occurred';
        return Promise.reject(message);
    }
);

export default api;
