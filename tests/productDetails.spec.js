const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    const produtos = productDetails('Alcool gel', 'Máscara');
    const produtoDetails0 = produtos[0].details.productId; 
    const produtoDetails1 = produtos[1].details.productId;    
    // Teste que o retorno da função é um array.    
    assert.strictEqual(typeof(produtos), 'object');      
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(produtos.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(produtos)[0] && typeof(produtos)[1], 'object' );
    // Teste que os dois objetos são diferentes entre si.
    assert.ok(Object.values(produtos[0]) !== Object.values(produtos[1]), true);
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(produtoDetails0.slice(10, 14) && produtoDetails1.slice(7, 10), '123');    
  });
});

