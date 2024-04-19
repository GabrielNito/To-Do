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
import { SubmitErrorHandler, useForm } from "react-hook-form";
import { addTaskHandler, addTaskHandlerSchema } from "./addTaskHandler";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  type addTaskSchema = z.infer<typeof addTaskHandlerSchema>;
  const { register, handleSubmit } = useForm<addTaskSchema>({
    resolver: zodResolver(addTaskHandlerSchema),
  });
  function handleFormAddTask(data: addTaskSchema) {
    addTaskHandler(data);
  }
  const onFormError: SubmitErrorHandler<typeof addTaskHandlerSchema> = (
    error
  ) => {
    console.error(error);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="flex gap-2">
          Add
          <Plus className="w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(handleFormAddTask, onFormError)}>
          <DialogHeader>
            <DialogTitle>Add new To Do</DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 pt-4 mb-4">
            <div className="flex flex-col gap-2 justify-start">
              <Label htmlFor="title">Title</Label>
              <Input
                {...register("title")}
                placeholder="e.g. Buy strogonoff"
                className="col-span-3"
              />
            </div>
            <div className="flex flex-col gap-2 justify-start">
              <Label htmlFor="description">Description</Label>
              <Input
                {...register("description")}
                placeholder="e.g. a lot"
                className="col-span-3"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2  mb-4">
            <Label htmlFor="description">Tags</Label>
            <div className="flex justify-start gap-8 flex-wrap">
              <div className="flex gap-2 items-center">
                <Checkbox {...register("important")} />
                <Label htmlFor="important">
                  <Tag>Important</Tag>
                </Label>
              </div>
              <div className="flex gap-2 items-center">
                <Checkbox {...register("urgent")} />
                <Label htmlFor="urgent">
                  <Tag>Urgent</Tag>
                </Label>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <Label htmlFor="description">Date</Label>

            <FormDate {...register} />
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
