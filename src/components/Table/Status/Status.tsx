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
}

const Status = ({ status }: StatusProps) => {
  const [light_status, setLight_status] = useState(status);
  const display_status = status.replace("_", " ");

  function handleSelectState(newValue: any) {
    setLight_status(newValue);
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
