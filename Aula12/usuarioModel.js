// Simulando um banco com um vetor
let usuarios = [];

class Usuario {
    //construtor
    constructor(id, nome, email, senha) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha; // Simula uma senha salva sem criptografia
    }

    // Método criação novo usuário
    static criar(nome, email, senha) {
        const novoId = usuarios.length + 1; // Incrementar id
        const novoUsuario = new Usuario(novoId, nome, email, senha);
        usuarios.push(novoUsuario); // Adicionar usuário ao vetor
        return novoUsuario; // Retorna o objeto do novo usuário criado
    }

    // Método listagem todos os usuários
    static listar() {
        return usuarios; // Retorna o vetor de usuários
    }    
}

module.exports = Usuario; // Exporta a classe Usuario para ser utilizada em outros módulos