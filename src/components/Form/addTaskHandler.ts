import { z } from "zod";

export const addTaskHandlerSchema = z.object({
  title: z.string().min(1),
  description: z.optional(z.string()),
  important: z.optional(z.boolean()),
  urgent: z.optional(z.boolean()),
  date: z.optional(z.date()),
});

type addTaskSchema = z.infer<typeof addTaskHandlerSchema>;

export function addTaskHandler(data: addTaskSchema) {
  console.log(data);
}
