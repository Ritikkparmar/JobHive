const getApiUrl = () => {
  if (import.meta.env.MODE === 'production') {
    return import.meta.env.VITE_API_URL || 'https://job-hive-backend.vercel.app';
  }
  // Development backend URL
  return 'http://localhost:8000';
};

export const API_URL = getApiUrl(); 