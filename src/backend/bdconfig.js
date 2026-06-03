import mysql from "mysql2";

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mobilebd"
});

conn.connect((err) => {
    if (err) {
        console.log("Erro ao conectar:", err);
        return;
    }

    console.log("MySQL conectado!");
});

export { conn };