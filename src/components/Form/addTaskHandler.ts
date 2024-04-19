import { z } from "zod";

export const addTaskHandlerSchema = z.object({
  title: z.string().min(1),
  description: z.optional(z.string()),
  important: z.string(),
  urgent: z.string(),
  date: z.optional(z.date()),
});

type addTaskSchema = z.infer<typeof addTaskHandlerSchema>;

export function addTaskHandler(data: addTaskSchema) {
  console.log(data);
}
