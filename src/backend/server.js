import express from "express";
import cors from "cors";
import { cadastrar } from "./routes/cadastrar.js";
import { logar } from "./routes/logar.js";

const app= express();

app.use(cors());
app.use(express.json());

app.use(cadastrar);
app.use(logar);

app.listen(3000, "0.0.0.0", () => {
    console.log("Servidor rodando");
});