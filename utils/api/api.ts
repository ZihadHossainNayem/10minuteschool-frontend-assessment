import axios from 'axios';

// axios instance
const api = axios.create({
    baseURL: process.env.API_BASE_URL,
   timeout: parseInt(process.env.API_TIMEOUT || '10000'),
    headers: {
        'X-TENMS-SOURCE-PLATFORM': process.env.API_HEADER_SOURCE || 'web',
        'Content-Type': 'application/json',
    },
});

// log api requests in development mode
api.interceptors.request.use(
    (config) => {
        if (process.env.NODE_ENV === 'development') {
            console.log(` ${config.method} ${config.url}`);
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// handle api errors with detailed logging
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (process.env.NODE_ENV === 'development') {
            console.error('API Error:', {
                url: error.config?.url,
                status: error.response?.status,
                message: error.response?.data?.message || error.message
            });
        }
        return Promise.reject(error);
    }
);

export default api;
