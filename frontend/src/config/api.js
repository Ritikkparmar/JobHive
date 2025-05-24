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