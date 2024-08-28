const math = require('mathjs'); // Importando a biblioteca mathjs
const readline = require('readline'); // Importando a biblioteca readline

// Função auxiliar para calcular potências
function calcularPotencia(base, expoente) {
    return math.pow(base, expoente);
}

// Classe para Retângulo
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.largura + this.altura);
    }
}

// Classe para Círculo
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }

    calcularArea() {
        return math.pi * calcularPotencia(this.raio, 2);
    }

    calcularPerimetro() {
        return 2 * math.pi * this.raio;
    }
}

// Classe para Triângulo
class Triangulo {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        return (this.base * this.altura) / 2;
    }

    calcularPerimetro(ladoA, ladoB, ladoC) {
        return ladoA + ladoB + ladoC;
    }
}

// Classe para Cilindro
class Cilindro {
    constructor(raio, altura) {
        this.raio = raio;
        this.altura = altura;
    }

    calcularAreaBase() {
        return math.pi * calcularPotencia(this.raio, 2);
    }

    calcularAreaLateral() {
        return 2 * math.pi * this.raio * this.altura;
    }

    calcularVolume() {
        return this.calcularAreaBase() * this.altura;
    }
}

// Configuração da interface de linha de comando
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarForma() {
    rl.question('Escolha uma forma (retangulo, circulo, triangulo, cilindro): ', (forma) => {
        switch (forma.toLowerCase()) {
            case 'retangulo':
                rl.question('Digite a largura: ', (largura) => {
                    rl.question('Digite a altura: ', (altura) => {
                        let retangulo = new Retangulo(parseFloat(largura), parseFloat(altura));
                        console.log("Área do retângulo:", retangulo.calcularArea());
                        console.log("Perímetro do retângulo:", retangulo.calcularPerimetro());
                        rl.close();
                    });
                });
                break;
            case 'circulo':
                rl.question('Digite o raio: ', (raio) => {
                    let circulo = new Circulo(parseFloat(raio));
                    console.log("Área do círculo:", circulo.calcularArea());
                    console.log("Perímetro do círculo:", circulo.calcularPerimetro());
                    rl.close();
                });
                break;
            case 'triangulo':
                rl.question('Digite a base: ', (base) => {
                    rl.question('Digite a altura: ', (altura) => {
                        rl.question('Digite o lado A: ', (ladoA) => {
                            rl.question('Digite o lado B: ', (ladoB) => {
                                rl.question('Digite o lado C: ', (ladoC) => {
                                    let triangulo = new Triangulo(parseFloat(base), parseFloat(altura));
                                    console.log("Área do triângulo:", triangulo.calcularArea());
                                    console.log("Perímetro do triângulo:", triangulo.calcularPerimetro(parseFloat(ladoA), parseFloat(ladoB), parseFloat(ladoC)));
                                    rl.close();
                                });
                            });
                        });
                    });
                });
                break;
            case 'cilindro':
                rl.question('Digite o raio: ', (raio) => {
                    rl.question('Digite a altura: ', (altura) => {
                        let cilindro = new Cilindro(parseFloat(raio), parseFloat(altura));
                        console.log("Área da base do cilindro:", cilindro.calcularAreaBase());
                        console.log("Área lateral do cilindro:", cilindro.calcularAreaLateral());
                        console.log("Volume do cilindro:", cilindro.calcularVolume());
                        rl.close();
                    });
                });
                break;
            default:
                console.log('Forma não reconhecida.');
                rl.close();
                break;
        }
    });
}

perguntarForma();
