import express from "express";
import cors from "cors";
import { cadastrar } from "./cadastrar.js";

const app = express();

app.use(cors()); // Permite conexões externas (como o celular)
app.use(express.json()); // Faz o Express entender JSON
app.use(cadastrar); // Ativa suas rotas

app.listen(3000, '0.0.0.0', () => {
    console.log("Servidor rodando na porta 3000");
});
