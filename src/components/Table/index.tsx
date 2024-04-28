import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableItem from "./TableItem";

export function Table_() {
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

        const response = await fetch(`http://localhost:3001/task/`, {
          method: "GET",
          headers: headers,
        });

        const data = await response.json();
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
          <TableHead className="w-[10%]">Status</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dados.map((item) => (
          <TableItem item={item} key={item.id} />
        ))}
      </TableBody>
    </Table>
  );
}
