import { z } from 'zod';

export const propertyTypeSchema = z.enum(['APARTMENT', 'VILLA', 'TOWNHOUSE', 'NEW_BUILD']);
export const propertyStatusSchema = z.enum(['FOR_SALE', 'SOLD', 'UNDER_CONTRACT']);

export const propertyCreateSchema = z.object({
  title: z.string().min(10),
  slug: z.string().min(5),
  description: z.string().min(30),
  type: propertyTypeSchema,
  status: propertyStatusSchema,
  location: z.string().min(3),
  region: z.string().min(3),
  price: z.number().int().nonnegative(),
  bedrooms: z.number().int().nonnegative(),
  bathrooms: z.number().int().nonnegative(),
  area: z.string().min(2),
  imageUrl: z.string().url(),
  agentName: z.string().min(3),
  features: z.array(z.string()).optional().default([]),
  gallery: z.array(z.string().url()).optional().default([]),
});

export const propertyUpdateSchema = propertyCreateSchema.partial();

export const leadCreateSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8).optional(),
  message: z.string().min(10),
  interestedIn: z.string().optional(),
  propertyId: z.string().optional(),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
