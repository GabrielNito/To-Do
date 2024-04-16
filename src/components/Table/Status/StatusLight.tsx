import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const StatusLightVariants = cva("w-3 h-3 rounded-full", {
  variants: {
    variant: {
      Blocked: "bg-red-500",
      Cancelled: "bg-gray-500",
      Completed: "bg-green-500",
      In_Progress: "bg-yellow-500",
      To_Do: "bg-blue-500",
    },
  },
  defaultVariants: {
    variant: "To_Do",
  },
});

interface StatusLightProps extends VariantProps<typeof StatusLightVariants> {
  variant:
    | "Blocked"
    | "Cancelled"
    | "Completed"
    | "In_Progress"
    | "To_Do"
    | null
    | undefined;
}

const StatusLight = ({ variant }: StatusLightProps) => {
  return <span className={cn(StatusLightVariants({ variant }))} />;
};

export { StatusLight, StatusLightVariants };
