const { deepStrictEqual } = require('assert');
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
    const array = productDetails('Alcool gel', 'Máscara');
    // Teste que o retorno da função é um array.
    assert.ok(Array.isArray(array));
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.ok(array.length === 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    for (let index = 0; index < array.length; index += 1) {
      assert.ok(typeof array[index] === 'object');
    }
    // Teste que os dois objetos são diferentes entre si.
    for (let index = 0; index < array.length; index += 1) {
      assert.notDeepStrictEqual(array[0], array[1]);
    }
    // Teste que os dois productIds terminam com 123.
    for (let index = 0; index < array.length; index += 1) {
      assert.ok(array[0].details.productId.includes('123'));
      assert.ok(array[1].details.productId.includes('123'));
    }
  });
});
