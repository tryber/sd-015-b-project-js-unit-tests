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
    const a = '';
    const b = '';
    const product = productDetails(a, b);
    // Teste que o retorno da função é um array.
    assert.strictEqual(Array.isArray(productDetails()), true, 'A função deve ser um array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(product.length, 2, 'O array deve ter 2 itens dentro');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof(productDetails()), 'object', 'Os itens dentro dos arrays devem ser objetos');
    // Teste que os dois objetos são diferentes entre si.
    assert.ok(product[0] !== product[1], 'Os objetos devem ser diferentes');
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(product[0].details.productId.substr(-3), '123', 'O productID deve terminar com 123');
    assert.deepStrictEqual(product[0].details.productId.substr(-3), '123', 'O productID deve terminar com 123');
  });
});
