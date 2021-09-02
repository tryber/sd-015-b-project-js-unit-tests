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
    const teste = productDetails('álcool gel', 'máscara');
    assert.strictEqual(Array.isArray(teste), true);
    assert.strictEqual(teste.length, 2);
    assert.strictEqual(typeof teste[0] && typeof teste[1], 'object');
    assert.strictEqual(teste[0] !== teste[1], true);
    assert.strictEqual(teste[0].details.productId.slice(-3), '123');
    assert.strictEqual(teste[1].details.productId.slice(-3), '123');
  });
});
