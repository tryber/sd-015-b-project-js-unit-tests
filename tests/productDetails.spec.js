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
    const actual = productDetails('a','b');
    assert.strictEqual(Array.isArray(actual), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(actual.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof actual[0], 'object')
    assert.strictEqual(typeof actual[1], 'object')
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(actual[0], actual[1])
    // Teste que os dois productIds terminam com 123.
    const actualString0 = actual[0].details.productId
    const actualString1 = actual[1].details.productId
    assert.strictEqual(actualString0.substr(actualString0.length -3), '123')
    assert.strictEqual(actualString1.substr(actualString1.length -3), '123')
  })
});
