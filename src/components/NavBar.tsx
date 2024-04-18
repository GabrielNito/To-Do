import { ModeToggle } from "./ModeToggle";
import Form from "./Form";
import { ListTodo } from "lucide-react";
import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-12 mb-4">
      <div className="flex item-center gap-2">
        <ModeToggle />
        <Button variant="ghost">Log Out</Button>
      </div>

      <div className="flex gap-4 items-center relative">
        <ListTodo size={48} className="relative top-[3px]" />
        <h1 className="text-5xl font-bold tracking-tight">To Do</h1>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="hover:bg-red-500 hover:text-background dark:hover:bg-red-500 dark:hover:text-foreground duration-300"
        >
          Delete Multiple Items
        </Button>
        <Form />
      </div>
    </div>
  );
};

export default NavBar;
