import NavBar from "@/components/NavBar";
import { Table_ } from "@/components/Table";

const ToDo = () => {
  return (
    <>
      <NavBar />
      <div className="m-12 border rounded-xl">
        <Table_ />
      </div>
    </>
  );
};

export default ToDo;
