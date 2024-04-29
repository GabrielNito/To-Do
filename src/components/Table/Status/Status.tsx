import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { cva, type VariantProps } from "class-variance-authority";
import { StatusLight } from "./StatusLight";
import { useState } from "react";
const statusVariants = cva({
  variants: {
    status: {
      Blocked: "",
      Cancelled: "",
      Completed: "",
      In_Progress: "",
      To_Do: "",
    },
  },
});

export interface StatusProps extends VariantProps<typeof statusVariants> {
  status: "Blocked" | "Cancelled" | "Completed" | "In_Progress" | "To_Do";
  id: number;
}

const Status = ({ status, id }: StatusProps) => {
  const [light_status, setLight_status] = useState(status);
  const display_status = status.replace("_", " ");

  async function fetchStatus(id: number, status: any) {
    try {
      const token: string | null = window.localStorage.getItem("token");
      const headers: HeadersInit = {
        "Content-Type": "application/json",
      };

      if (token) {
        headers["Authorization"] = token;
      }

      await fetch(`http://localhost:3001/task/status/${id}`, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify({ status: status }),
      });

      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function handleSelectState(newValue: any) {
    setLight_status(newValue);
    fetchStatus(id, newValue);
  }

  return (
    <Select onValueChange={handleSelectState}>
      <SelectTrigger>
        <StatusLight variant={light_status} />

        <SelectValue placeholder={display_status} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Status</SelectLabel>
          <SelectItem value="Blocked">Blocked</SelectItem>
          <SelectItem value="Cancelled">Cancelled</SelectItem>
          <SelectItem value="Completed">Completed</SelectItem>
          <SelectItem value="In_Progress">In Progress</SelectItem>
          <SelectItem value="To_Do">To Do</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export { Status, statusVariants };
