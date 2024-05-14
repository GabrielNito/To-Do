import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableItemContact from "./TableItemContact";

export function ContactsTable() {
  const [dados, setDados] = useState<any[]>([]);

  useEffect(() => {
    async function fetchList() {
      try {
        const token: string | null = window.localStorage.getItem("token");
        const headers: HeadersInit = {
          "Content-Type": "application/json",
        };

        if (token) {
          headers["Authorization"] = token;
        }

        const response = await fetch(
          `https://to-do-test-ov9q.onrender.com/contacts/`,
          {
            method: "GET",
            headers: headers,
          }
        );

        const data = await response.json();
        console.log(data);

        setDados(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchList();
  }, []);

  return (
    <Table>
      <TableHeader className="max-lg:hidden">
        <TableRow>
          <TableHead className="w-[5%]">Options</TableHead>
          <TableHead className="w-[10%]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dados.map((item) => (
          <TableItemContact contact={item} key={item.id} />
        ))}
      </TableBody>
    </Table>
  );
}
