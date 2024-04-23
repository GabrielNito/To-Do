import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("This is not a valid email"),
  password: z.string().length(6, {
    message: "Password needs to be equal or longer than 6 characters",
  }),
});
const SignInSchema = z.object({
  email: z.string().email("This is not a valid email"),
  password: z.string().length(6, {
    message: "Password needs to be equal or longer than 6 characters",
  }),
});

interface LoginProps {
  variant: "login" | "signin";
}

const LogIn = ({ variant }: LoginProps) => {
  const navigate = useNavigate();
  function handleCreateAccountButton() {
    navigate(texts[variant].altButton.link);
  }
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });
  function loginOnSubmit(data: z.infer<typeof LoginSchema>) {
    console.log(JSON.stringify(data, null, 2));
  }
  function signinOnSubmit(data: z.infer<typeof SignInSchema>) {
    console.log(JSON.stringify(data, null, 2));
  }

  const texts = {
    login: {
      title: "Log In",
      description: "Enter your email and password below to log in",
      button: "Log in",
      separator: "OR IF YOU DON'T HAVE AN ACCOUNT",
      altButton: { text: "Create an Account", link: "/signin" },
      handler: loginOnSubmit,
    },
    signin: {
      title: "Create an Account",
      description: "Enter your email and password below to create an account",
      button: "Sign in",
      separator: "OR LOGIN WITH",
      altButton: { text: "Log in", link: "/" },
      handler: signinOnSubmit,
    },
  };

  return (
    <>
      <NavBar />

      <section
        id="login"
        className="w-screen h-[90vh] flex justify-center items-center"
      >
        <div
          id="sign_up"
          className="border rounded-2xl w-[35%] h-[70vh] flex flex-col justify-center items-center bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"
        >
          <div className="flex flex-col gap-4 items-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              {texts[variant].title}
            </h1>
            <p className="text-muted-foreground tracking-wide">
              {texts[variant].description}
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(texts[variant].handler)}
              className="w-full flex flex-col justify-center items-center"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-[60%]">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} autoFocus />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="w-[60%] mt-2">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="my-4 w-[60%]" type="submit">
                {texts[variant].button}
              </Button>
            </form>
          </Form>

          <div className="mt-4 w-[60%] flex gap-4 items-center mb-8">
            <Separator />
            <h3 className="text-muted-foreground tracking-wide text-nowrap text-xs">
              {texts[variant].separator}
            </h3>
            <Separator />
          </div>

          <Button
            variant="ghost"
            onClick={handleCreateAccountButton}
            className="border w-[60%] flex gap-2 items-center"
          >
            {texts[variant].altButton.text}
          </Button>
        </div>
        <Toaster />
      </section>
    </>
  );
};

export default LogIn;
