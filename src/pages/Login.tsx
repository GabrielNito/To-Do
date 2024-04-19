import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/toaster";
import { loginHandler, loginHandlerSchema } from "@/utils/loginHandler";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const LogIn = () => {
  const navigate = useNavigate();
  function handleCreateAccountButton() {
    navigate("/signin");
  }

  type LoginSchema = z.infer<typeof loginHandlerSchema>;
  const { register, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginHandlerSchema),
  });
  function handleFormLogin(data: LoginSchema) {
    const login = loginHandler(data);
    if (login) {
      navigate("/todo");
      return;
    }
  }

  const onFormError: SubmitErrorHandler<typeof loginHandlerSchema> = (
    error
  ) => {
    console.error(error);
    // toast({
    //   variant: "destructive",
    //   title: String(error),
    // });
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
          className="border rounded-2xl w-[35%] h-[50vh] flex flex-col justify-center items-center bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"
        >
          <div className="flex flex-col gap-4 items-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Log In</h1>
            <p className="text-muted-foreground tracking-wide">
              Enter your email and password below to log in
            </p>
          </div>

          <form
            className="w-full flex flex-col justify-center items-center"
            onSubmit={handleSubmit(handleFormLogin, onFormError)}
          >
            <Input
              {...register("email")}
              type="text"
              placeholder="Email"
              className="w-[50%] mb-2"
              autoFocus
            />
            <Input
              {...register("password")}
              type="password"
              placeholder="Password"
              className="w-[50%] mb-2"
            />

            <Button type="submit" className="mb-8 w-[50%]">
              Log In
            </Button>
          </form>

          <div className="w-[50%] flex gap-4 items-center mb-8">
            <Separator />
            <h3 className="text-muted-foreground tracking-wide text-nowrap text-xs">
              OR IF YOU DON'T HAVE AN ACCOUNT
            </h3>
            <Separator />
          </div>

          <Button
            variant="ghost"
            onClick={handleCreateAccountButton}
            className="border w-[50%] flex gap-2 items-center"
          >
            Create an account
          </Button>
        </div>
        <Toaster />
      </section>
    </>
  );
};

export default LogIn;
