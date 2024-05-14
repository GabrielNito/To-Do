import DeleteContact from "./DeleteContact";
import EditContact from "./EditContact";

interface OptionsContactsProps {
  contact: any;
}

const OptionsContacts = ({ contact }: OptionsContactsProps) => {
  return (
    <div className="flex justify-center items-center gap-2">
      <DeleteContact id={contact.id} />

      <EditContact contact={contact} />
    </div>
  );
};

export default OptionsContacts;
