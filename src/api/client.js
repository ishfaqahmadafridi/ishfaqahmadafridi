import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
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
            try {
                const refresh = localStorage.getItem('refresh_token');
                const response = await axios.post('http://localhost:8000/api/login/refresh/', { refresh });
                localStorage.setItem('access_token', response.data.access);
                return api(originalRequest);
            } catch (refreshError) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/signin';
                return Promise.reject(refreshError);
            }
        }
        const message = error.response?.data?.detail || error.message || 'An error occurred';
        return Promise.reject(message);
    }
);

export default api;
