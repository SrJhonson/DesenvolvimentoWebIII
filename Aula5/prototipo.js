// Classe Forma
class Forma {
    constructor(tipo, cor, tamanho) {
        this.tipo = tipo;
        this.cor = cor;
        this.tamanho = tamanho;
    }

    exibirDetalhes() {
        console.log(`Tipo: ${this.tipo}, Cor: ${this.cor}, Tamanho: ${this.tamanho}`);
    }
}

// Protótipos
const retanguloPrototipo = new Forma("Retângulo", "Azul", "Grande");
const circuloPrototipo = new Forma("Círculo", "Vermelho", "Médio");

// Clonagem e Personalização
const novoRetangulo = Object.create(retanguloPrototipo);
novoRetangulo.cor = "Verde";

const novoCirculo = Object.create(circuloPrototipo);
novoCirculo.tamanho = "Pequeno";

novoRetangulo.exibirDetalhes(); // Tipo: Retângulo, Cor: Verde, Tamanho: Grande
novoCirculo.exibirDetalhes();   // Tipo: Círculo, Cor: Vermelho, Tamanho: Pequeno
