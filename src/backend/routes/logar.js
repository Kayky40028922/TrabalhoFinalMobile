import { Router } from "express";
import { conn } from "../bdconfig.js";

const logar = Router();

logar.post("/logar", (req, res) => {

    console.log("Rota logar chamada");

    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos"
        });
    }

    const sql = `SELECT * FROM usuarios_novos WHERE email = ? AND senha = ?`;

    conn.query(
        sql,
        [email, senha],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    sucesso: false,
                    erro: err.message
                });
            }
            if (result.length === 0){
                return res.status(401).json({
                    sucesso: false,
                    mensagem: "Email ou senha inválidos"
                });
            }
            res.json({
                sucesso: true,
                usuario: result[0]
            });
        }
    );
});

export { logar };