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
    /* assert.fail(); */
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const product = productDetails('product1', 'product2');
    assert.strictEqual(Array.isArray(product), true);

    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray */

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(product.length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof product[0], 'object');
    assert.strictEqual(typeof product[1], 'object');

    // Teste que os dois objetos são diferentes entre si.
    assert.notStrictEqual(product[0], product[1]);

    // Teste que os dois productIds terminam com 123.
   assert.ok(product[0].details.productId.endsWith('123'));
   assert.ok(product[0].details.productId.endsWith('123'));

   /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith */
  });
});
