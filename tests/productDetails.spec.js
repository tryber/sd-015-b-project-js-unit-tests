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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const expected = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(expected), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(expected.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    function isValid() {
      let valid = true;
      if (typeof (expected) === 'object') {
        if (Array.isArray(expected[0]) === false && Array.isArray(expected[1]) === false) {
          valid = false
        }
      }
      return valid;
    }
    assert.strictEqual(isValid(), false);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(expected[0], expected[1]);
    // Teste que os dois productIds terminam com 123.
    assert.strictEqual(expected[0].details.productId.substr(-3), '123');
    assert.strictEqual(expected[1].details.productId.substr(-3), '123');
  });
});
