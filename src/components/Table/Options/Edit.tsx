import { CalendarIcon, Pen } from "lucide-react";
import { Button } from "../../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface EditProps {
  item: any;
}

const FormSchema = z.object({
  title: z.string({ errorMap: () => ({ message: "Title can't be empty" }) }),
  description: z.optional(z.string()),
  tags: z.string(),
  date: z.date({
    errorMap: () => ({
      message: "A date is required",
    }),
  }),
});

const Edit = ({ item }: EditProps) => {
  const { date, description, id, tags, title } = item;

  const { toast } = useToast();

  async function fetchEdit(data: any) {
    try {
      const token: string | null = window.localStorage.getItem("token");
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = token;
      }

      await fetch(`https://to-do-test-ov9q.onrender.com/task/${id}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(data),
      });

      toast({
        title: "Task updated",
        description: "Please reload page to see the updated content",
        action: (
          <ToastAction
            altText="Reload"
            onClick={() => window.location.reload()}
          >
            Reload
          </ToastAction>
        ),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function formOnSubmit(data: z.infer<typeof FormSchema>) {
    if (data.tags === "undefined") {
      console.log(tags);
      data.tags = tags;
    }

    fetchEdit(data);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="p-3">
          <Pen className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(formOnSubmit)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="title"
              defaultValue={title}
              render={({ field }) => (
                <FormItem className="flex flex-col relative">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              defaultValue={description}
              render={({ field }) => (
                <FormItem className="flex flex-col relative">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} className="col-span-3" />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="mt-2 flex gap-4">
              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem className="flex flex-col relative">
                    <FormLabel>Tags</FormLabel>
                    <FormControl className="!mt-0">
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger className="!w-full">
                          <SelectValue placeholder="Select a Value" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="Important">Important</SelectItem>
                            <SelectItem value="Urgent">Urgent</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col relative">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value
                            ? format(field.value, "PPP")
                            : format(date, "PPP")}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="w-full flex !justify-between">
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default Edit;
