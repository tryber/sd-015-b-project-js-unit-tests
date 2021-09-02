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
    const output = productDetails('Alcool gel', 'Máscara');

    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(output), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(output.length, 2)

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const item1Type = typeof output[0];
    const item2Type = typeof output[1];
    assert.strictEqual(item1Type && item2Type, 'object')

    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(output[0], output[1]);

    // Teste que os dois productIds terminam com 123.
    const item1 = output[0].details.productId.substr(output[0].details.productId.length - 3);
    const item2 = output[1].details.productId.substr(output[1].details.productId.length - 3);
    assert.strictEqual(item1 && item2, '123')
  });
});
