import NavBar from "@/components/NavBar";
import { ContactsTable } from "@/components/Table/index_contacts";
import { Toaster } from "@/components/ui/toaster";

const Contacts = () => {
  return (
    <>
      <NavBar contacts />
      <div className="ml-6 w-[calc(100vw-3rem)] dark:bg-gray-900 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border max-lg:m-4">
        <ContactsTable />
      </div>
      <Toaster />
    </>
  );
};

export default Contacts;
