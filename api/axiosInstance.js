import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with Practical Project 1 API URL

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add JWT token automatically if exists
axiosInstance.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // JWT token stored after login
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default axiosInstance;
