import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true, // Ensure HTTPS URLs
});

// ✅ Function to Upload Resume (PDF, DOCX, ZIP, etc.)
export const uploadResume = async (localFilePath) => {
    try {
      if (!localFilePath) throw new Error("No file path provided!");
  
      const result = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "raw", // ✅ For PDF, DOCX, ZIP, etc.
        folder: "resumes",
        use_filename: true,
        unique_filename: false
      });
  
      console.log("✅ Resume Uploaded:", result.secure_url);
      return result.secure_url;
    } catch (error) {
      console.error("❌ Cloudinary Upload Error:", error);
      throw error;
    }
  };
  

export default cloudinary;
