import mysql from 'mysql2';

export const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',     // Geralmente é 'root'
    password: '',
    database: 'mobilebd'             // O banco que criamos no Passo 1
});

conn.connect((err) => {
    if (err) console.error('Erro ao conectar ao MySQL:', err);
    else console.log('Conectado ao MySQL com sucesso!');
});
