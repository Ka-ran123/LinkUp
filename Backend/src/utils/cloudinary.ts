import { v2 as cloudinary } from 'cloudinary';
import { config } from '../config/env-config';
const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  config;

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

/**
 * Uploads a file to Cloudinary and returns the upload result.
 * @param filePath - The local filepath of the file to be uploaded
 * @param folderName - The folder name in Cloudinary where the file will be stored
 * @returns The upload result containing the public_id, version, signature, width, height, format, resource_type, created_at, tags, pages, bytes, type, etag, placeholder, url, secure_url, and original_filename
 */
const uploadFile = async (
  filePath: string,
  folderName: string
): Promise<any> => {
  if (!filePath) return null;
  return await cloudinary.uploader.upload(filePath, {
    resource_type: 'auto',
    folder: folderName,
  });
};

/**
 * Deletes a file from Cloudinary with the given public ID.
 * @param publicId - The public ID of the file to be deleted
 * @returns The result of the deletion operation
 */
const deleteFile = async (publicId: string): Promise<any> => {
  if (!publicId) return null;
  return await cloudinary.uploader.destroy(publicId);
};

export { uploadFile, deleteFile };
