import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon, ReloadIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const Login = () => {
  const [signIn, setSignIn] = useState("default");
  function handleSignInButton() {
    setSignIn("disabled");
  }

  return (
    <section
      id="login"
      className="w-screen h-screen flex justify-center items-center"
    >
      <div
        id="sign_up"
        className="border rounded-2xl w-[35%] h-[50vh] flex flex-col justify-center items-center"
      >
        <div className="flex flex-col gap-4 items-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Create an Account
          </h1>
          <p className="text-muted-foreground tracking-wide">
            Enter your email below to create your account
          </p>
        </div>

        <Input placeholder="name@example.com" className="w-[50%] mb-2" />

        {signIn === "disabled" ? (
          <Button
            disabled
            onClick={handleSignInButton}
            className="mb-8 w-[50%]"
          >
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            Sign In with Email
          </Button>
        ) : (
          <Button onClick={handleSignInButton} className="mb-8 w-[50%]">
            Sign In with Email
          </Button>
        )}

        <div className="w-[50%] flex gap-4 items-center mb-8">
          <Separator />
          <h3 className="text-muted-foreground tracking-wide text-nowrap text-xs">
            OR CONTINUE WITH
          </h3>
          <Separator />
        </div>

        {signIn === "disabled" ? (
          <Button
            disabled
            variant="outline"
            className="w-[50%] flex gap-2 items-center"
          >
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            GitHub
          </Button>
        ) : (
          <Button variant="outline" className="w-[50%] flex gap-2 items-center">
            <GitHubLogoIcon />
            GitHub
          </Button>
        )}
      </div>
    </section>
  );
};

export default Login;
