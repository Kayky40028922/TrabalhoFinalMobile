import { Router } from "express";
import { conn } from "./bdconfig.js";
const cadastrar = Router();

cadastrar.post("/adicionar", (req, res) => {
    const { email, senha, confirmar_senha } = req.body;

    // O uso do '?' protege seu banco de dados
    conn.query("INSERT INTO usuarios_novos (email, senha, confirmar_senha) VALUES (?, ?, ?)", [email, senha, confirmar_senha], (err, result) => {
        if (err) return res.status(500).json(err.message);
        res.json({ sucesso: true, id: result.insertId });
    });
});

export { cadastrar };
