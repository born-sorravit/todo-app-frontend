import z from "zod";

export const todoInputSchema = z.object({
  task: z.string().min(3, {
    message: "Task must be at least 3 characters long.",
  }),
});
