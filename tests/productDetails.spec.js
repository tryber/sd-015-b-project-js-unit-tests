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
    assert.deepStrictEqual(Array.isArray(productDetails('produto1', 'produto2')), true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(productDetails('produto1', 'produto2').length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof Object.keys(productDetails('produto1', 'produto2')), 'object')
    // Teste que os dois objetos são diferentes entre si.
    const test = Object.values(productDetails('produto1', 'produto2'));
    const positionOne = Object.values(test)[0].details.productId;
    const positionTwo = Object.values(test)[1].details.productId;
    assert.notDeepStrictEqual(test[0], test[1])
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(positionOne.slice(-3) && positionTwo.slice(-3), '123')
  });
});
