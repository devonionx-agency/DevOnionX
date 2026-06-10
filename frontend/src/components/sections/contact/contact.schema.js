import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  email: z.string().email("Enter a valid email"),

  company: z.string().optional(),

  phone: z.string().min(8, "Phone number is too short"),

  services: z.array(z.string()).min(1, "Select at least one service"),

  budget: z.string().min(1, "Select a budget"),

  message: z.string().min(
    20,
    "Message must be at least 20 characters"
  ),
});

export const defaultValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  services: [],
  budget: "",
  message: "",
};