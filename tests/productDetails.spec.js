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
    const myProduct = productDetails('provolone', 'amora');
    const product1 = myProduct[0].details.productId;
    const product2 = myProduct[1].details.productId;
    
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(Array.isArray(myProduct), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(myProduct.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof myProduct[0], 'object');
    assert.deepStrictEqual(typeof myProduct[1], 'object');
    
    // Teste que os dois objetos são diferentes entre si.
    assert.deepStrictEqual(myProduct[0] === myProduct[1], false);

    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(product1.substring(product1.length - 3) === product2.substring(product2.length - 3), true);
  });
});
