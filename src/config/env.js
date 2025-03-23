export const config = {
    // API_URL: import.meta.env.VITE_API_URL,
    JWT_SECRET: import.meta.env.VITE_JWT_SECRET,
    FILE_UPLOAD_MAX_SIZE: import.meta.env.VITE_FILE_UPLOAD_MAX_SIZE,
    ALLOWED_FILE_TYPES: import.meta.env.VITE_ALLOWED_FILE_TYPES.split(','),
    API_TIMEOUT: import.meta.env.VITE_API_TIMEOUT,

    API_URL: import.meta.env.VITE_API_URL || 'http://discordecommercebackend.test',
    FRONTEND_URL: import.meta.env.VITE_FRONTEND_URL || 'http://localhost:5173',
    API_TIMEOUT: 15000,
    // JWT_SECRET: import.meta.env.VITE_JWT_SECRET
  };