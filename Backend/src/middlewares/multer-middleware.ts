import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from '../constants/app-contants';
import messages from '../utils/message';
import { Request } from 'express';
const { INVALID_FILE_TYPE } = messages.common;

// Ensure the uploads directory exists
// eslint-disable-next-line no-undef
const uploadPath = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()} - ${file.originalname}`);
  },
});

/**
 * Multer file filter to only allow image/jpeg, image/png, image/jpg
 * @param req - Express request object
 * @param file - Multer file object
 * @param cb - Callback function
 * @returns {void}
 */

// eslint-disable-next-line no-undef
function fileFilter(req: Request, file: Express.Multer.File, cb: any) {
  if (ALLOWED_FILE_TYPES.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error(INVALID_FILE_TYPE), false);
  }
}

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_FILE_SIZE, // 2 MB
  },
});

export default upload;
