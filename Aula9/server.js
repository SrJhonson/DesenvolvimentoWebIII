const express = require('express');
const app = express();
const port = 3001;
app.use(express.json());
app.use(express.static(__dirname));

let listaDeCompras = [];

// Rota GET todos os itens
app.get('/itens', (req, res) => {
    res.json(listaDeCompras);
});

// Rota POST novo item
app.post('/itens', (req, res) => {
    const novoItem = { id: Date.now().toString(), ...req.body };
    listaDeCompras.push(novoItem);
    res.status(201).json(novoItem);
});

// Rota DELETE para remover um item
app.delete('/itens/:id', (req, res) => {
    const id = req.params.id;
    listaDeCompras = listaDeCompras.filter(item => item.id !== id);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
