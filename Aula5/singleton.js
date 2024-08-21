// Classe Singleton CarrinhoDeCompras
class CarrinhoDeCompras {
    constructor() {
        if (CarrinhoDeCompras.instance) {
            return CarrinhoDeCompras.instance;
        }
        this.itens = [];
        CarrinhoDeCompras.instance = this;
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    exibirItens() {
        console.log(`Itens no carrinho: ${this.itens.join(', ')}`);
    }
}

// Utilizando o Singleton
const carrinho1 = new CarrinhoDeCompras();
const carrinho2 = new CarrinhoDeCompras();

carrinho1.adicionarItem("Item 1");
carrinho2.adicionarItem("Item 2");

carrinho1.exibirItens(); // Itens no carrinho: Item 1, Item 2
carrinho2.exibirItens(); // Itens no carrinho: Item 1, Item 2
