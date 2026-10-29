import { z } from "zod";

export const SponsorSchema = z.object({
  sponsor_id: z.string().min(1),
  name: z.string().min(1),
  type: z.enum(["lender", "mover", "insurer", "other"])
}).strict();

export const AddressSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  state: z.string().length(2),
  zip_code: z.string().regex(/^[0-9]{5}$/)
}).strict();

export const PropertySchema = z.object({
  property_id: z.string().min(1),
  address: AddressSchema,
  price: z.number().min(0),
  bedrooms: z.number().min(0),
  bathrooms: z.number().min(0),
  square_feet: z.number().min(0),
  amenities: z.array(z.string().min(1)),
  zip_code: z.string().regex(/^[0-9]{5}$/),
  local_sponsors: z.array(SponsorSchema)
}).strict();

export type Property = z.infer<typeof PropertySchema>;