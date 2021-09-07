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
    const produto1 = productDetails()[0];
    const produto2 = productDetails()[1];
    const idProduct1 = produto1.details.productId;
    const idProduct2 = produto2.details.productId;
    assert.strictEqual(Array.isArray(productDetails()), true);
    assert.deepStrictEqual(productDetails().length, 2);
    assert.strictEqual(typeof produto1, 'object');
    assert.strictEqual(typeof produto2, 'object');
    assert.deepStrictEqual(produto1 === produto2, false);
    assert.strictEqual(idProduct1.includes('123'), true);
    assert.strictEqual(idProduct2.includes('123'), true);    
  });
});
