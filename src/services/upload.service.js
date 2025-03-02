import { config } from '../config/env';

export const validateFile = (file) => {
  if (file.size > config.FILE_UPLOAD_MAX_SIZE) {
    throw new Error('File size exceeds limit');
  }
  if (!config.ALLOWED_FILE_TYPES.includes(file.type)) {
    throw new Error('File type not allowed');
  }
  return true;
};