const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Olá, DSM FRANCA!');
});

app.arguments(express.json());

let usuarios = [
    {id:1, nome:`Ana`}
    {id:2, nome:`Matheus`},
];

app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});