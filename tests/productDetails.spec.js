const { AssertionError } = require('assert');
const assert = require('assert');
const { type } = require('os');
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
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.

    const actual = productDetails('String', 'string2')
    const actual2 = productDetails('Banana', 'Maca')

    assert.strictEqual(Array.isArray(actual), true)
    assert.strictEqual(actual2.length, 2)
    assert.strictEqual(typeof actual2[0], 'object')
    assert.strictEqual(typeof actual2[1], 'object')
    assert.notStrictEqual(actual2[0], actual2[1])
    assert.strictEqual(actual2[0].details.productId, 'Banana123')
    assert.strictEqual(actual2[1].details.productId, 'Maca123')
  });
});
