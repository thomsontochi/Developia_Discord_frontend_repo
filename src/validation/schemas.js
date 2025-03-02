import { z } from 'zod';
import { config } from '../config/env';
import Logger from '../utils/logger';

// Common validations
const passwordSchema = z.string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number');

const nameSchema = z.string()
  .min(2, 'Name must be at least 2 characters')
  .max(50, 'Name cannot exceed 50 characters')
  .regex(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces');

export const loginSchema = z.object({
  email: z.string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
  password: z.string()
    .min(1, 'Password is required'),
  userType: z.enum(['user', 'vendor'])
});

export const registrationSchema = z.object({
  firstName: nameSchema,
  lastName: nameSchema,
  email: z.string()
    .email('Invalid email address'),
  password: passwordSchema,
  confirmPassword: z.string(),
  userType: z.enum(['user', 'vendor'])
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

export const vendorRegistrationStep1Schema = z.object({
  full_name: nameSchema,
  email: z.string().email('Invalid email address'),
  password: passwordSchema,
  password_confirmation: z.string()
}).refine(data => data.password === data.password_confirmation, {
  message: "Passwords don't match",
  path: ["password_confirmation"]
});

export const vendorRegistrationStep2Schema = z.object({
  store_name: z.string()
    .min(2, 'Store name must be at least 2 characters')
    .max(100, 'Store name cannot exceed 100 characters'),
  store_description: z.string()
    .min(20, 'Description must be at least 20 characters')
    .max(500, 'Description cannot exceed 500 characters'),
  business_category: z.string()
    .min(1, 'Business category is required'),
  address: z.string()
    .min(5, 'Address must be at least 5 characters')
    .max(200, 'Address cannot exceed 200 characters'),
  store_logo: z.any()
    .refine(
      file => !file || file.size <= config.FILE_UPLOAD_MAX_SIZE,
      'File size must be less than 5MB'
    )
    .refine(
      file => !file || config.ALLOWED_FILE_TYPES.includes(file.type),
      'Only image files are allowed'
    )
    .optional()
});

export const vendorRegistrationStep3Schema = z.object({
  payment_details: z.object({
    bank_name: z.string()
      .min(2, 'Bank name is required')
      .max(100, 'Bank name cannot exceed 100 characters'),
    account_number: z.string()
      .min(8, 'Invalid account number')
      .max(20, 'Invalid account number')
      .regex(/^\d+$/, 'Account number must contain only digits'),
    account_name: z.string()
      .min(2, 'Account holder name is required')
      .max(100, 'Account holder name cannot exceed 100 characters')
  })
});

// Validation helper function with logging
export const validateForm = async (schema, data) => {
  try {
    const validatedData = await schema.parseAsync(data);
    Logger.debug('Form validation successful', { 
      schema: schema._def.typeName,
      data: validatedData 
    });
    return { success: true, data: validatedData };
  } catch (error) {
    Logger.warn('Form validation failed', {
      schema: schema._def.typeName,
      errors: error.errors,
      data
    });
    return {
      success: false,
      errors: error.errors.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {})
    };
  }
};