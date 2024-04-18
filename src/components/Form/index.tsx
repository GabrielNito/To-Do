// import { useForm } from "react-hook-form";
// import { Button } from "../ui/button";
// // import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
// import { Input } from "../ui/input";

// const Form_ = () => {
//   const { register, handleSubmit } = useForm();

//   function handleFilterProducts(data: any) {
//     console.log(data);
//   }

//   return (
//     <form
//       onSubmit={handleSubmit(handleFilterProducts)}
//       className="flex items-center gap-2"
//     >
//       <Input placeholder="ID do pedido" {...register("id")} />
//       <Input placeholder="Nome do pedido" {...register("name")} />
//       <Button type="submit" variant="secondary">
//         Filtrar resoltados
//       </Button>
//     </form>
//   );
// };

// export default Form_;
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

import Tag from "../Table/Tags";
import FormDate from "./FormDate";
import { useForm } from "react-hook-form";
// import { DatePickerForm } from "./index copy";

const Form = () => {
  const { register, handleSubmit } = useForm();

  function handleFilterProducts(data: any) {
    console.log(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex gap-2">
          Add
          <Plus className="w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(handleFilterProducts)}>
          <DialogHeader>
            <DialogTitle>Add new To Do</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 pt-4 mb-4">
            <div className="flex flex-col gap-2 justify-start">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                placeholder="e.g. Buy strogonoff"
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col gap-2 justify-start">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                placeholder="e.g. a lot"
                className="col-span-3"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2  mb-4">
            <Label htmlFor="description">Tags</Label>
            <div className="flex justify-start gap-8 flex-wrap">
              <div className="flex gap-2 items-center">
                <Checkbox id="important" />
                <Label htmlFor="important">
                  <Tag>Important</Tag>
                </Label>
              </div>
              <div className="flex gap-2 items-center">
                <Checkbox id="urgent" />
                <Label htmlFor="urgent">
                  <Tag>Urgent</Tag>
                </Label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <Label htmlFor="description">Date</Label>

            <FormDate />
          </div>

          <DialogFooter className="!justify-between">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Form;
