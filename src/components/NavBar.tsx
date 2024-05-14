import { ModeToggle } from "./ModeToggle";
import Form_ from "./Form";
import { ListTodo } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useNavigate } from "react-router-dom";
import ContactsForm from "./Form/contactsForm";

interface NavBarProps {
  todo?: boolean;
  contacts?: boolean;
}

const NavBar = ({ todo, contacts }: NavBarProps) => {
  const navigate = useNavigate();
  function logoutHandler() {
    async function fetchLogout() {
      try {
        const token: string | null = window.localStorage.getItem("token");
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers["Authorization"] = token;
        }

        fetch(`https://to-do-test-ov9q.onrender.com/auth/logout`, {
          method: "POST",
          headers: headers,
        });
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchLogout();
    navigate("/");
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
                <Button variant="outline" onClick={() => navigate("/contacts")}>
                  Contacts
                </Button>

                <Form_ />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="w-full flex flex-row justify-between py-4 max-lg:hidden">
          <div className="flex item-center gap-2">
            <ModeToggle />
            <Button variant="outline" onClick={logoutHandler}>
              Log Out
            </Button>

            <Button variant="outline" onClick={() => navigate("/contacts")}>
              Contacts
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <Form_ />
          </div>
        </div>
      </nav>
    );
  } else if (contacts) {
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

                <Button variant="outline" onClick={() => navigate("/todo")}>
                  To-Do
                </Button>

                <ContactsForm />
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="w-full flex flex-row justify-between py-4 max-lg:hidden">
          <div className="flex item-center gap-2">
            <ModeToggle />
            <Button variant="outline" onClick={logoutHandler}>
              Log Out
            </Button>
            <Button variant="outline" onClick={() => navigate("/todo")}>
              To-Do
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <ContactsForm />
          </div>
        </div>
      </nav>
    );
  }
  return (
    <div className="flex justify-center items-center py-4 px-12 mb-4">
      <div className="absolute left-12 top-4">
        <ModeToggle />
      </div>

      <div className="flex gap-4 items-center relative">
        <ListTodo size={48} className="relative top-[3px]" />
        <h1 className="text-5xl font-bold tracking-tight">To Do</h1>
      </div>
    </div>
  );
};

export default NavBar;
