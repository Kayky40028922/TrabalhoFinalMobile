import { Router } from "express";
import { conn } from "../bdconfig.js";

const cadastrar = Router();

cadastrar.post("/cadastrar", (req, res) => {

    console.log("Dados recebidos:", req.body);

    const { email, senha, confirmar_senha } = req.body;

    if (!email || !senha || !confirmar_senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos"
        });
    }

    const sql = `
        INSERT INTO usuarios_novos
        (email, senha, confirmar_senha)                    
        VALUES (?, ?, ?)
    `;

    conn.query(
        sql,
        [email, senha, confirmar_senha],
        (err, result) => {

            if (err) {
                console.log("Erro MySQL:", err);

                return res.status(500).json({
                    sucesso: false,
                    erro: err.message
                });
            }

            res.json({
                sucesso: true,
                id: result.insertId
            });
        }
    );
});

export { cadastrar };
