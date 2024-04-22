import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import TableItem from "./TableItem";

let date = moment().format("MMMM Do YYYY h:mm");
const invoices = [
  {
    id: 1,
    status: "In_Progress" as const,
    title: "Do the Dishes",
    description: "wdym I have to do the dishes man",
    tags: ["Important"],
    date: date,
  },
  {
    id: 2,
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
      <TableHeader className="max-lg:hidden">
        <TableRow>
          <TableHead className="w-[5%]">Options</TableHead>
          <TableHead className="w-[10%]">Status</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">id</TableHead>
          <TableHead hidden className="w-[5%] border-l text-right">
            Checkbox
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableItem invoice={invoice} key={invoice.id} />
        ))}
      </TableBody>
    </Table>
  );
}
