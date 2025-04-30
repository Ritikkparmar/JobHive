const getApiUrl = () => {
  if (import.meta.env.MODE === 'production') {
    // Production backend URL
    return 'https://job-hive-backend.vercel.app';  // Make sure this matches your actual backend URL
  }
  // Development backend URL
  return 'http://localhost:8000';
};

export const API_URL = getApiUrl(); 