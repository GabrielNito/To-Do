import { Checkbox } from "../ui/checkbox";
import { TableCell, TableRow } from "../ui/table";
import Options from "./Options";
import { Status } from "./Status/Status";
import Tag from "./Tags";

interface TableItemProps {
  invoice: any;
}

const TableItem = ({ invoice }: TableItemProps) => {
  const { date, description, id, status, tags, title } = invoice;

  return (
    <TableRow key={id}>
      <TableCell className="flex gap-1">
        <Options />
      </TableCell>

      <TableCell>
        <Status status={status} />
      </TableCell>

      <TableCell>
        <h1 className="text-base">{title}</h1>
      </TableCell>

      <TableCell>{description}</TableCell>

      <TableCell>
        {tags.map((tag: any, index: number) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </TableCell>

      <TableCell>{date}</TableCell>

      <TableCell hidden className="flex justify-end items-center mr-8">
        <Checkbox hidden className="w-6 h-6 rounded-lg" />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
