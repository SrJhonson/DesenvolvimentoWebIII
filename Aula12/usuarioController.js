const Usuario = require('./usuarioModel');

const usuarioController = {
    // Criação de usuario
    criarUsuario: (req, res) => {
        const { nome, email, senha } = req.body;

        // Verifica se todos os campos foram preenchidos
        if (!nome || !email || !senha) {
            return res.status(400).json({ error: 'Nome, email e senha são obrigatórios' });
        }
        try {
            const novoUsuario = Usuario.criar(nome, email, senha);
            res.status(201).json(novoUsuario); 
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    },

    // Listar usuario
    listarUsuarios: (req, res) => {
        const usuarios = Usuario.listar();
        res.json(usuarios);
    }
};

module.exports = usuarioController;