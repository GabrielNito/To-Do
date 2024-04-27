import NavBar from "@/components/NavBar";
import { Table_ } from "@/components/Table";

const ToDo = () => {
  return (
    <>
      <NavBar todo />
      <div className="ml-6 w-[calc(100vw-3rem)] dark:bg-gray-900 bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border max-lg:m-4">
        <Table_ />
      </div>
    </>
  );
};

export default ToDo;
