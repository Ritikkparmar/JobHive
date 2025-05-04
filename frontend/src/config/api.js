const getApiUrl = () => {
  if (import.meta.env.MODE === 'production') {
    // Production backend URL
    return 'https://job-hive-backend.vercel.app';  // Updated to match the expected backend URL
  }
  // Development backend URL
  return 'http://localhost:8000';
};

export const API_URL = getApiUrl(); 