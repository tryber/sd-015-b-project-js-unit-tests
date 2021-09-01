const assert = require('assert');
const { isArray } = require('util');
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
    // Teste que o retorno da função é um array.
    const productD = productDetails('arroz', 'feijao');
    assert.strictEqual(Array.isArray(productD), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productD.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productD, 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepEqual(productD[0], productD[1]);
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(productD[0].details.productId.endsWith('123'), true);
    assert.strictEqual(productD[1].details.productId.endsWith('123'), true)
  });
});
