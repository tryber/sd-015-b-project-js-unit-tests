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
    const expected = productDetails('a', 'b');
    assert.strictEqual(Array.isArray(expected), true);

    // Teste que o array retornado pela função contém dois itens dentro.
    const expected2 = productDetails('a', 'b');
    assert.strictEqual(expected2.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const expected3 = productDetails('a', 'b');
    assert.strictEqual(typeof expected3, 'object');

    // Teste que os dois objetos são diferentes entre si.
    const obj1 = productDetails('a', 'b')[0];
    const obj2 = productDetails('a', 'b')[1];
    assert.notDeepEqual(obj1, obj2);
    // Teste que os dois productIds terminam com 123.
    const prodId1 = productDetails('a', 'b')[0].details.productId.slice(-3);
    const prodId2 = productDetails('a', 'b')[1].details.productId.slice(-3);
    assert.strictEqual(prodId1 && prodId2, '123');
  });
});
