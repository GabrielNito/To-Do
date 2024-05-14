import { Pen } from "lucide-react";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface EditProps {
  contact: any;
}

const FormSchema = z.object({
  name: z.string({ errorMap: () => ({ message: "Title can't be empty" }) }),
  email: z.optional(z.string()),
  phone: z.string().min(10).max(11),
});

const EditContact = ({ contact }: EditProps) => {
  const { id, name, email, phone } = contact;

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

      await fetch(`https://to-do-test-ov9q.onrender.com/contacts/${id}`, {
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
              name="name"
              defaultValue={name}
              render={({ field }) => (
                <FormItem className="flex flex-col relative">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              defaultValue={email}
              render={({ field }) => (
                <FormItem className="flex flex-col relative">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} className="col-span-3" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              defaultValue={phone}
              render={({ field }) => (
                <FormItem className="flex flex-col relative">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} className="col-span-3" />
                  </FormControl>
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

export default EditContact;
