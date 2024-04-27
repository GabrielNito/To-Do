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
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const LoginSchema = z.object({
  name: z.optional(z.string()),
  email: z.string().email("This is not a valid email"),
  password: z.string().min(6, {
    message: "Password needs to be equal or longer than 6 characters",
  }),
});
const SignInSchema = z.object({
  name: z.string(),
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
  const { toast } = useToast();

  function handleCreateAccountButton() {
    navigate(texts[variant].altButton.link);
  }
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(LoginSchema),
  });
  function loginOnSubmit(data: z.infer<typeof LoginSchema>) {
    async function fetchDefault() {
      try {
        const token: string | null = window.localStorage.getItem("token");
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers["Authorization"] = token;
        }

        const response = await fetch(`http://localhost:3001/auth/login`, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(data),
        });

        const result = await response.json();
        // console.log("Success:", result);

        if (result.error) {
          toast({
            variant: "destructive",
            title: result.error,
          });
        }

        if (result.token) {
          window.localStorage.setItem("token", result.token);
          navigate("/todo");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchDefault();
  }
  function signinOnSubmit(data: z.infer<typeof SignInSchema>) {
    async function fetchDefault() {
      try {
        const token: string | null = window.localStorage.getItem("token");
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers["Authorization"] = token;
        }

        const response = await fetch(`http://localhost:3001/auth/register`, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(data),
        });

        const result = await response.json();
        // console.log("Success:", result);

        if (result.name) {
          toast({
            title: "Usuário cadastrado com sucesso",
            description: "Clique no botão ao lado para fazer login",
            action: (
              <ToastAction altText="Log In" onClick={() => navigate("/")}>
                Log In
              </ToastAction>
            ),
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchDefault();
  }

  const texts = {
    login: {
      title: "Log In",
      description: "Enter your email and password below to log in",
      button: "Log in",
      separator: "OR IF YOU DON'T HAVE AN ACCOUNT",
      altButton: { text: "Create an Account", link: "/signin" },
    },
    signin: {
      title: "Create an Account",
      description: "Enter your email and password below to create an account",
      button: "Sign in",
      separator: "OR LOGIN WITH",
      altButton: { text: "Log in", link: "/" },
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
          className="border rounded-2xl p-[5%] min-w-[30%] flex flex-col justify-center items-center bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 max-sm:w-screen"
        >
          <div className="flex flex-col gap-4 items-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">
              {texts[variant].title}
            </h1>
            <p className="text-muted-foreground tracking-wide">
              {texts[variant].description}
            </p>
          </div>

          {variant === "signin" ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(signinOnSubmit)}
                className="w-[75%] flex flex-col justify-center items-center"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full mb-2">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} autoFocus />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
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
                    <FormItem className="w-full mt-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="my-4 w-full" type="submit">
                  {texts[variant].button}
                </Button>
              </form>
            </Form>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(loginOnSubmit)}
                className="w-[75%] flex flex-col justify-center items-center"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="w-full">
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
                    <FormItem className="w-full mt-2">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="my-4 w-full" type="submit">
                  {texts[variant].button}
                </Button>
              </form>
            </Form>
          )}

          <div className="mt-4 w-[75%] flex gap-4 items-center mb-8">
            <Separator />
            <h3 className="text-muted-foreground tracking-wide text-nowrap text-xs">
              {texts[variant].separator}
            </h3>
            <Separator />
          </div>

          <Button
            variant="ghost"
            onClick={handleCreateAccountButton}
            className="border w-[75%] flex gap-2 items-center"
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
