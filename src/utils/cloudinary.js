import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (fileUri, fileName, folderName) => {
  const res = await cloudinary.uploader.upload(fileUri, {
    invalidate: true,
    resource_type: "image",
    filename_override: fileName,
    folder: "wit-dreamin/" + folderName,
    use_filename: true,
  });

  return res;
};
