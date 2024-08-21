// Classe Personagem
class Personagem {
    constructor(forca, agilidade, inteligencia) {
        this.forca = forca;
        this.agilidade = agilidade;
        this.inteligencia = inteligencia;
    }

    exibirAtributos() {
        console.log(`Força: ${this.forca}, Agilidade: ${this.agilidade}, Inteligência: ${this.inteligencia}`);
    }
}

// Classe Abstrata FabricaDePersonagens
class FabricaDePersonagens {
    criarPersonagem() {
        throw new Error("Este método deve ser implementado pelas subclasses");
    }
}

// Fábrica Concreta para Humanos
class FabricaDeHumanos extends FabricaDePersonagens {
    criarPersonagem() {
        return new Personagem(10, 10, 10);
    }
}

// Fábrica Concreta para Elfos
class FabricaDeElfos extends FabricaDePersonagens {
    criarPersonagem() {
        return new Personagem(8, 15, 12);
    }
}

// Fábrica Concreta para Orcs
class FabricaDeOrcs extends FabricaDePersonagens {
    criarPersonagem() {
        return new Personagem(15, 8, 6);
    }
}

// Utilizando as fábricas
const fabricaHumano = new FabricaDeHumanos();
const humano = fabricaHumano.criarPersonagem();
humano.exibirAtributos(); // Força: 10, Agilidade: 10, Inteligência: 10

const fabricaElfo = new FabricaDeElfos();
const elfo = fabricaElfo.criarPersonagem();
elfo.exibirAtributos(); // Força: 8, Agilidade: 15, Inteligência: 12

const fabricaOrc = new FabricaDeOrcs();
const orc = fabricaOrc.criarPersonagem();
orc.exibirAtributos(); // Força: 15, Agilidade: 8, Inteligência: 6
