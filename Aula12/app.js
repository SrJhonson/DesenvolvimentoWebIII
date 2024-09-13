// Importa Express
const express = require('express');
// Instancia Express
const app = express();
// Porta do servidor (3000)
const port = 3000;

// Analisando json
app.use(express.json());
// Arquivos estáticos (como HTML) no diretorio atual
app.use(express.static(__dirname)); 

// Importa o controlador que esta em um arquivo separado (mesma pasta)
const usuarioController = require('./usuarioController');

// Rota GET para o arquivo index.html (pagina de cadastro)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Rota GET para arquivo lista_usuarios.html (página de listagem de usuários)
app.get('/lista_usuarios.html', (req, res) => {
    res.sendFile(__dirname + '/lista_usuarios.html');
});

// Rota GET para listar os usuários
app.get('/usuarios', usuarioController.listarUsuarios); 
// Método 'listarUsuarios' do controlador de usuário

// Rota POST para criar um novo usuário
app.post('/usuarios', usuarioController.criarUsuario);
// Método 'criarUsuario' do controlador de usuário

// Inicia o servidor na porta setada anteriormente
app.listen(port, () => {
    // Mensagem no console sobre a porta
    console.log(`Servidor rodando em http://localhost:${port}`);
});