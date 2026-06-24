import { z } from 'zod';

export const Contact = z.object({
  name: z.string(),
  email: z.email(),
  message: z.string().min(25).max(450),
});
