import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const FormSchema = z.object({
  id: z.any(),
});

const Test = () => {
  async function fetchDefault(
    link: string,
    method: string,
    hasToken: boolean = false,
    data?: any
  ) {
    try {
      const token: string | null = window.localStorage.getItem("token");
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      if (hasToken) {
        if (token) {
          headers["Authorization"] = token;
        }
      }

      const response = await fetch(`http://localhost:3001/${link}`, {
        method: method,
        headers: headers,
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log("Success:", result);

      if (result.token) {
        window.localStorage.setItem("token", result.token);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  async function fetchUrl(link: string, method: string, id: number) {
    try {
      const token: string | null = window.localStorage.getItem("token");
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = token;
      }

      const response = await fetch(`http://localhost:3001/${link}${id}`, {
        method: method,
        headers: headers,
      });

      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  function formOnSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    fetchUrl("task/", "DELETE", Number(data.id));
  }

  return (
    <div className="flex gap-4 m-4">
      <Button
        onClick={() =>
          fetchDefault("auth/login", "POST", true, {
            email: "teste@teste.com",
            password: "123123",
          })
        }
      >
        Login
      </Button>
      <Button
        onClick={() =>
          fetchDefault("task/", "POST", true, {
            status: "In_Progress" as const,
            title: "Do the Dishes",
            description: "wdym I have to do the dishes man",
            tags: "Important",
          })
        }
      >
        Fetch
      </Button>
      <Button onClick={() => fetchDefault("task/", "GET", true)}>List</Button>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(formOnSubmit)}
          className="flex flex-row justify-center items-center gap-2"
        >
          <FormField
            control={form.control}
            name="id"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-center gap-2">
                <FormLabel>Id</FormLabel>
                <FormControl className="!mt-0">
                  <Input {...field}></Input>
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Delete</Button>
        </form>
      </Form>
    </div>
  );
};

export default Test;
