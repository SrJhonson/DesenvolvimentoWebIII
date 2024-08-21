const readline = require('readline');

// Criando uma interface para ler dados do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para perguntar o nome e a idade do usuário
function perguntarDados() {
    rl.question('Qual é o seu nome? ', (nome) => {
        rl.question('Quantos anos você tem? ', (idade) => {
            rl.question('Qual seu curso? ', (curso) => {
                const pessoa = new Pessoa(nome, idade, curso);
                pessoa.apresentar();
                rl.close();
            })
        });
    });
}

// Definindo a classe Pessoa
class Pessoa {
    constructor(nome, idade, curso) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos e faço faculdade de ${this.curso}.`);
    }
}

// Chamando a função para perguntar os dados ao usuário
perguntarDados();
