import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataBase from "./database/ormconfig";
import routes from "./routes";

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(routes);
app.use(cors());
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://meuapp.com"],
//   })
// );

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
  console.log(
    `Banco de dados`,
    dataBase.isInitialized ? "inicializado" : "não inicializado"
  );
});
