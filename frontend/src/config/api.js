import axios from 'axios';

// Create axios instance with default config
const axiosInstance = axios.create({
  timeout: 30000, // 30 seconds timeout
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add request interceptor for debugging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Making request to:', config.url);
    console.log('Request config:', {
      method: config.method,
      headers: config.headers,
      data: config.data
    });
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for better error handling
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response received:', {
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error) => {
    console.error('Response error:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data
    });

    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Request timed out. Please try again.'));
    }
    if (error.response?.status === 504) {
      return Promise.reject(new Error('Server is taking too long to respond. Please try again.'));
    }
    if (!error.response) {
      return Promise.reject(new Error('Network error. Please check your connection.'));
    }
    return Promise.reject(error);
  }
);

const getApiUrl = () => {
  // Log the current environment and API URL for debugging
  console.log('Current environment:', import.meta.env.MODE);
  console.log('VITE_API_URL:', import.meta.env.VITE_API_URL);

  if (import.meta.env.MODE === 'production') {
    const prodUrl = import.meta.env.VITE_API_URL || 'https://job-hive-backend.vercel.app';
    console.log('Using production API URL:', prodUrl);
    return prodUrl;
  }
  
  // Development backend URL
  const devUrl = 'http://localhost:8000';
  console.log('Using development API URL:', devUrl);
  return devUrl;
};

export const API_URL = getApiUrl();

// Add a function to validate the API URL
export const validateApiUrl = () => {
  const url = API_URL;
  if (!url) {
    console.error('API URL is not defined');
    return false;
  }
  try {
    new URL(url);
    return true;
  } catch (error) {
    console.error('Invalid API URL:', url);
    return false;
  }
};

export default axiosInstance; 