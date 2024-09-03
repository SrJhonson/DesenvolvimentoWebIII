// Importa o módulo Express para criar o servidor web (se não tiver, usar o npn install express)
const express = require('express');
// Cria uma instância do aplicativo Express
const app = express();
// Define a porta do servidor (3001 neste caso, pode escolher qualquer outra)
const port = 3001;
// Analisa o corpo (body) das requisições HTTP em formato JSON
app.use(express.json());
// Servir arquivos estáticos (como HTML, CSS, imagens) a partir do diretório atual
app.use(express.static(__dirname));
// Vetor que simula um BD
let listaDeCompras = [];

// Rota GET todos os itens
app.get('/itens', (req, res) => {
    // formato json
    res.json(listaDeCompras);
});

// Rota POST novo item
app.post('/itens', (req, res) => {
    // Obtém os dados 
    const novoItem = req.body;
    // Adiciona o novo item à lista (metodo push)
    listaDeCompras.push(novoItem);
    // Envia o novo item criado 
    res.status(201).json(novoItem);
});

// Rota DELETE para remover um item
app.delete('/itens/:index', (req, res) => {
    // Extrai o índice do item da URL e converte para número inteiro
    const index = parseInt(req.params.index);
     // Remove o item do array 
    listaDeCompras.splice(index, 1);
    // Envia uma resposta 204 (No Content), indicando sucesso na remoção, mas sem conteúdo no corpo da resposta
        res.sendStatus(204);
});

// Inicia o servidor na porta especificada
app.listen(port, () => {
    // mensagem no CMD indicando o funcionamento
    console.log(`Servidor rodando em http://localhost:${port}`);
});