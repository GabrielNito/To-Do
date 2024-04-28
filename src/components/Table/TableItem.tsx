import moment from "moment";
import { TableCell, TableRow } from "../ui/table";

import Options from "./Options";
import { Status } from "./Status/Status";
import Tag from "./Tags";

interface TableItemProps {
  item: any;
}

const TableItem = ({ item }: TableItemProps) => {
  const { date, description, id, status, tags, title } = item;

  const responsiveness =
    "relative max-lg:flex max-lg:flex-row max-lg:gap-4 max-lg:items-center max-lg:border-r max-lg:before:py-2 max-lg:before:content-[attr(data-cell)] max-lg:before:font-medium max-lg:before:text-muted-foreground max-lg:before:block max-lg:before:capitalize max-lg:before:border-muted max-lg:before:h-full max-lg:before:w-[20%] max-lg:before:overflow-hidden max-lg:before:whitespace-nowrap max-lg:before:text-ellipsis";

  return (
    <TableRow
      key={id}
      className="hover:bg-gray-200 dark:hover:bg-gray-800 max-lg:m-4"
    >
      <TableCell data-cell="Options" className={responsiveness}>
        <Options item={item} />
      </TableCell>

      <TableCell
        data-cell="status"
        className={`${responsiveness} max-lg:before:w-[26%]`}
      >
        <Status id={id} status={status} />
      </TableCell>

      <TableCell data-cell="Title" className={responsiveness}>
        <h1 className="text-base">{title}</h1>
      </TableCell>

      <TableCell data-cell="description" className={responsiveness}>
        {description}
      </TableCell>

      <TableCell data-cell="tags" className={responsiveness}>
        <Tag>{tags}</Tag>
      </TableCell>

      <TableCell data-cell="date" className={responsiveness}>
        {moment(date).format("MMMM Do YYYY")}
      </TableCell>
    </TableRow>
  );
};

export default TableItem;
