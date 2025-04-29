const getApiUrl = () => {
  if (import.meta.env.MODE === 'production') {
    // Production backend URL - this should be your deployed backend URL
    return 'https://job-hive-backend.vercel.app';  // or your actual backend URL
  }
  // Development backend URL
  return 'http://localhost:8000';  // Express backend runs on 8000
};

export const API_URL = getApiUrl(); 