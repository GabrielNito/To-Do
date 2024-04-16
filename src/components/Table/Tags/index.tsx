import { ReactNode } from "react";
import { Badge } from "../../ui/badge";

interface TagProps {
  children: ReactNode;
}

const Tag = ({ children }: TagProps) => {
  let classes = "";

  if (children === "Urgent") {
    classes = "bg-yellow-500 text-white pointer-events-none";
  }
  if (children === "Important") {
    classes = "bg-red-500 text-white pointer-events-none";
  }

  return <Badge className={classes}>{children}</Badge>;
};

export default Tag;
