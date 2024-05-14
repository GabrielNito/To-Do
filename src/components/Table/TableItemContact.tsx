import { TableCell, TableRow } from "../ui/table";
import OptionsContacts from "./Options/contacts";

interface TableItemContactProps {
  contact: any;
}

const TableItemContact = ({ contact }: TableItemContactProps) => {
  const { id, name, email, phone } = contact;

  const responsiveness =
    "relative max-lg:flex max-lg:flex-row max-lg:gap-4 max-lg:items-center max-lg:border-r max-lg:before:py-2 max-lg:before:content-[attr(data-cell)] max-lg:before:font-medium max-lg:before:text-muted-foreground max-lg:before:block max-lg:before:capitalize max-lg:before:border-muted max-lg:before:h-full max-lg:before:w-[20%] max-lg:before:overflow-hidden max-lg:before:whitespace-nowrap max-lg:before:text-ellipsis";

  return (
    <TableRow
      key={id}
      className="hover:bg-gray-200 dark:hover:bg-gray-800 max-lg:m-4"
    >
      <TableCell data-cell="Options" className={responsiveness}>
        <OptionsContacts contact={contact} />
      </TableCell>

      <TableCell data-cell="Name" className={responsiveness}>
        <h1 className="text-base">{name}</h1>
      </TableCell>

      <TableCell data-cell="Email" className={responsiveness}>
        <h1 className="text-base">{email}</h1>
      </TableCell>

      <TableCell data-cell="Phone" className={responsiveness}>
        <h1 className="text-base">{phone}</h1>
      </TableCell>
    </TableRow>
  );
};

export default TableItemContact;
