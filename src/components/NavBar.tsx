import { ModeToggle } from "./ModeToggle";
import Form_ from "./Form";
import { ListTodo } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Test from "./test";
import { useNavigate } from "react-router-dom";
interface NavBarProps {
  todo?: boolean;
}

const NavBar = ({ todo }: NavBarProps) => {
  const navigate = useNavigate();

  function logoutHandler() {
    async function fetchDefault() {
      try {
        const token: string | null = window.localStorage.getItem("token");
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers["Authorization"] = token;
        }

        const response = await fetch(`http://localhost:3001/auth/logout`, {
          method: "POST",
          headers: headers,
        });

        const result = await response.json();
        console.log("Success:", result);

        if (result.name) {
          window.localStorage.setItem("token", result.token);
          navigate("/");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchDefault();
  }

  if (todo) {
    return (
      <nav className="ml-6 w-[calc(100vw-3rem)] relative h-[10vh] max-lg:h-[8vh]">
        <div className="flex gap-4 items-center absolute top-2 left-[50%] translate-x-[-50%] max-lg:left-4 max-lg:translate-x-0">
          <ListTodo size={48} className="relative top-[3px] w-8 mx-lg:top-0" />
          <h1 className="text-5xl font-bold tracking-tight max-lg:text-3xl">
            To Do
          </h1>
        </div>

        <div className="hidden max-lg:block absolute right-4 top-3">
          <Sheet>
            <SheetTrigger>
              <Button variant="outline">Options</Button>
            </SheetTrigger>
            <SheetContent>
              <div className="w-full flex flex-col items-end gap-4 mt-8">
                <ModeToggle />

                <Button variant="outline" onClick={logoutHandler}>
                  Log Out
                </Button>

                <Form_ />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="w-full flex flex-row justify-between py-4 max-lg:hidden">
          <div className="flex item-center gap-2">
            <ModeToggle />
            <Button variant="outline">Log Out</Button>
          </div>

          <div className="flex items-center gap-4">
            <Form_ />
          </div>
        </div>
      </nav>
    );
  }
  return (
    <div className="flex justify-center items-center py-4 px-12 mb-4">
      <div className="absolute left-12 top-4">
        <ModeToggle />
        <Test />
      </div>

      <div className="flex gap-4 items-center relative">
        <ListTodo size={48} className="relative top-[3px]" />
        <h1 className="text-5xl font-bold tracking-tight">To Do</h1>
      </div>
    </div>
  );
};

export default NavBar;
