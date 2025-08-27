import fs from 'fs';
import path from 'path';
import multer from 'multer';
import { ALLOWED_FILE_TYPES, MAX_FILE_SIZE } from '../constants/app.contant';
import messages from '../utils/message';
const { INVALID_FILE_TYPE, FILE_TOO_LARGE } = messages.common;

// Ensure the uploads directory exists
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
function fileFilter(req: Express.Request, file: Express.Multer.File, cb: any) {
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
