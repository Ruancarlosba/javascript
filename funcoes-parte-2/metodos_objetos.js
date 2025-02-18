const carrinho = {
    produtos: ['maçã', 'banana', 'laranja'],
    adicionarProduto(produto) {
      this.produtos.push(produto);
    },
    mostrarProdutos() {
      console.log(this.produtos);
    }
  };
  
  carrinho.adicionarProduto('pera');
  carrinho.mostrarProdutos();  // ["maçã", "banana", "laranja", "pera"]
  