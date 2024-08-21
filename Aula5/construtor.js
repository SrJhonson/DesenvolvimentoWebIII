// Classe Pedido
class Pedido {
    constructor() {
        this.tamanho = null;
        this.ingredientes = [];
        this.tipoDeMassa = null;
    }

    exibirPedido() {
        console.log(`Tamanho: ${this.tamanho}`);
        console.log(`Ingredientes: ${this.ingredientes.join(', ')}`);
        console.log(`Tipo de Massa: ${this.tipoDeMassa}`);
    }
}

// Classe PedidoBuilder
class PedidoBuilder {
    constructor() {
        this.pedido = new Pedido();
    }

    escolherTamanho(tamanho) {
        this.pedido.tamanho = tamanho;
        return this;
    }

    adicionarIngrediente(ingrediente) {
        this.pedido.ingredientes.push(ingrediente);
        return this;
    }

    escolherTipoDeMassa(tipoDeMassa) {
        this.pedido.tipoDeMassa = tipoDeMassa;
        return this;
    }

    construir() {
        return this.pedido;
    }
}

// Utilizando o PedidoBuilder
const pedido = new PedidoBuilder()
    .escolherTamanho("Grande")
    .adicionarIngrediente("Queijo")
    .adicionarIngrediente("Tomate")
    .escolherTipoDeMassa("Fina")
    .construir();

pedido.exibirPedido();
// Tamanho: Grande
// Ingredientes: Queijo, Tomate
// Tipo de Massa: Fina
