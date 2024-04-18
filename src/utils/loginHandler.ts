import { z } from "zod";

export const loginHandlerSchema = z.object({
  email: z
    .string()
    .min(1, { message: "This field has to be filled" })
    .email("This is not a valid email")
    .refine(
      (email) => email === "nito@nito.com", // validation
      {
        message: "wrong email",
      }
    ),
  password: z.string().min(6, {
    message: "Password needs to be equal or longer than 6 characters",
  }),
});

type LoginSchema = z.infer<typeof loginHandlerSchema>;

export function loginHandler(data: LoginSchema) {
  const validationResult = loginHandlerSchema.safeParse(data);
  console.log(validationResult);

  if (data.email === "nito@nito.com" && data.password === "123456") {
    console.log("logged");
    return true;
  }
}
