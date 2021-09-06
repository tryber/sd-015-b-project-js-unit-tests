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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara'), 'object');
    // Teste que o array retornado pela função contém dois itens dentro.
    const output = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(output.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    for (let objects of output) {
      assert.deepStrictEqual(typeof objects, 'object');
    }
    // Teste que os dois objetos são diferentes entre si.
    for (let object = 0; object < output.length; object += 1) {
      assert.notDeepStrictEqual(output[object], output[object + 1]);
    }
    // Teste que os dois productIds terminam com 123.
    for (let index = 0; index < output.length; index += 1) {
      assert.deepStrictEqual(output[index].details.productId, `${output[index].name}123`);
    }
  });
});
