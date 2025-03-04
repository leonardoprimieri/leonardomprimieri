import { z } from "zod";

export const GetInTouchSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters long." })
    .trim(),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters long." })
    .trim(),
});

export type GetInTouchFormValues = z.infer<typeof GetInTouchSchema>;
