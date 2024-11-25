import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Set up Cloudinary Storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
      folder: 'uploads',
      format: async (req, file) => {
          // Check the file's extension to determine the format
          const fileExtension = file.originalname.split('.').pop().toLowerCase();
          if (fileExtension === 'jpg' || fileExtension === 'jpeg') {
              return 'jpg';
          }
          // Default to 'png' if the file is not jpg/jpeg
          return 'png';
      },
      public_id: (req, file) => file.originalname.split('.')[0] + ""
  },
});

// Create the Multer instance
const cloudinaryFileUploader = multer({ storage: storage });

export { cloudinaryFileUploader };
