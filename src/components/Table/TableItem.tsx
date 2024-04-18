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
    <TableRow key={id} className="hover:bg-gray-200 dark:hover:bg-gray-800">
      <TableCell className="">
        <Options />
      </TableCell>

      <TableCell className="border-x">
        <Status status={status} />
      </TableCell>

      <TableCell>
        <h1 className="text-base">{title}</h1>
      </TableCell>

      <TableCell className="border-x">{description}</TableCell>

      <TableCell>
        {tags.map((tag: any, index: number) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </TableCell>

      <TableCell className="border-x">{date}</TableCell>

      <TableCell className="text-right">
        <h1>{id}</h1>
      </TableCell>

      <TableCell hidden className="border-l w-fit text-center px-0">
        <Checkbox hidden className="w-6 h-6 rounded-lg " />
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
