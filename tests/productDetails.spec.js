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
    const products = productDetails('Alcool gel', 'Máscara');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    const expected1 = Array.isArray(products);
    assert.strictEqual(expected1, true)
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.deepStrictEqual(products.length, 2)
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof products, 'object')
    // Teste que os dois objetos são diferentes entre si.
    const key1 = products[0];
    const key2 = products[1];
    let verify = true;
    if (key1 === key2) {
    verify = false;
    };
    assert.strictEqual(verify, true)
    // Teste que os dois productIds terminam com 123.
    const finalValue1 = key1.details.productId.substr(-3, 3);
    const finalValue2 = key2.details.productId.substr(-3, 3);
    let finalNumber = true;
    if (finalValue1 !== finalValue2) {
      finalNumber = false;
    };
  });
});
