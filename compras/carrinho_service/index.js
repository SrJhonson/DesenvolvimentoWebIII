const express = require('express');
const app = express();
const port = 3002; 
const cors = require('cors'); // foi necessário devido a erro

app.use(express.static(__dirname));
app.use(express.json());
app.use(cors()); // foi necessário devido a erro

let carrinho = []; // nosso vetor representando o BD

// rota GET
app.get('/carrinho', (req, res) => {
    res.json(carrinho);
});

// rota POST
app.post('/carrinho', (req, res) => {
    const item = req.body;

    // Verificar se o item possui um id e quantidade válidos
    if (!item.id || !item.quantidade || item.quantidade <= 0) {
        return res.status(400).json({ error: 'ID ou quantidade inválida' });
    }
    
    // Verificar se o produto já está no carrinho
    const produtoExistente = carrinho.find(produto => produto.id === item.id);
    
    if (produtoExistente) {
        produtoExistente.quantidade += item.quantidade;
        res.status(200).json(produtoExistente); 
    } else {
        carrinho.push(item);
        res.status(201).json(item); 
    }
});

// rota DELETE
app.delete('/carrinho/:index', (req, res) => {
    const index = parseInt(req.params.index);
    
    // Verifica se o índice é válido
    if (index >= 0 && index < carrinho.length) {
        const produto = carrinho[index];

        // Se quantidade do produto for maior que 1 incrementa - 1 na quantidade
        if (produto.quantidade > 1) {
            produto.quantidade -= 1; 
            res.status(200).json({ message: 'Quantidade do produto atualizada', produto });
        } else { // Remove o produto do carrinho caso a quantidade seja 1
            carrinho.splice(index, 1);
            res.sendStatus(204); 
        }
    } else {
        res.status(404).json({ error: 'Item não encontrado no carrinho' });
    }
});

// exibe porta que está rodando
app.listen(port, () => {
    console.log(`Serviço de Carrinho rodando em http://localhost:${port}`);
});
