import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { Status } from "../Status/Status";
// import Tag from "../Tags";
// import Options from "../Options";
import moment from "moment";
import TableItem from "./TableItem";

let date = moment().format("MMMM Do YYYY h:mm");
const invoices = [
  {
    id: "001",
    status: "In_Progress" as const,
    title: "Do the Dishes",
    description: "wdym I have to do the dishes man",
    tags: ["Important", "Awesome"],
    date: date,
  },
  {
    id: "002",
    status: "Completed" as const,
    title: "Pay bills",
    description: "Gotta pay 'em",
    tags: ["Urgent"],
    date: date,
  },
];

export function Table_() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[5%]">Options</TableHead>
          <TableHead className="w-[15%]">Status</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Date</TableHead>
          <TableHead hidden className="text-right">
            Checkbox
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice, index: number) => (
          <TableItem invoice={invoice} key={index} />
        ))}
      </TableBody>
    </Table>
  );
}
