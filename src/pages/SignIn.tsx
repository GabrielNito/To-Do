import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  function handleLogInButton() {
    navigate("/");
  }
  const { register, handleSubmit } = useForm();

  function handleFormSignIn(data: any) {
    console.log(data);
  }

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
            <h1 className="text-3xl font-bold tracking-tight">
              Create an Account
            </h1>
            <p className="text-muted-foreground tracking-wide">
              Enter your email below to create your account
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleFormSignIn)}
            className="w-full flex flex-col justify-center items-center"
          >
            <Input
              {...register("email")}
              placeholder="e.g. name@example.com"
              className="w-[50%] mb-2"
              autoFocus
            />
            <Input
              {...register("password")}
              type="password"
              placeholder="definetely not 123"
              className="w-[50%] mb-2"
            />

            <Button type="submit" className="mb-8 w-[50%]">
              Sign In with Email
            </Button>
          </form>

          <div className="w-[50%] flex gap-4 items-center mb-8">
            <Separator />
            <h3 className="text-muted-foreground tracking-wide text-nowrap text-xs">
              OR LOGN IN
            </h3>
            <Separator />
          </div>

          <Button
            variant="ghost"
            onClick={handleLogInButton}
            className="border w-[50%] flex gap-2 items-center"
          >
            Log in
          </Button>
        </div>
      </section>
    </>
  );
};

export default SignIn;
