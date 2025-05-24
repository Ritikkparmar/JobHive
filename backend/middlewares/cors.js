// CORS middleware to handle cross-origin requests
const corsMiddleware = (req, res, next) => {
  // Set CORS headers
  res.header('Access-Control-Allow-Origin', 'https://job-hive-jobportal-pvt27z6ur-ritik-parmars-projects.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).send();
  }
  
  next();
};

export default corsMiddleware; 