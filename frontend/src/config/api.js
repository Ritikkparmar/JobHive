const getApiUrl = () => {
  if (import.meta.env.MODE === 'production') {
    // Production backend URL
    return 'https://job-portal-jobportal-yt.vercel.app';  // Updated to match deployed backend URL
  }
  // Development backend URL
  return 'http://localhost:8000';
};

export const API_URL = getApiUrl(); 