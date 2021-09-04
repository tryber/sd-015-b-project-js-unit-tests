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
    // Teste que o retorno da função é um array.
    // Teste que o array retornado pela função contém dois itens dentro.
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    // Teste que os dois objetos são diferentes entre si.
    // Teste que os dois productIds terminam com 123.
    let error = 'Opa deu erro!...Conserte!';
    let actual = productDetails('Alcool gel', 'Máscara');
    assert.strictEqual(Array.isArray(actual), true, error);
    assert.strictEqual(actual.length, 2, error);
    for (let value of actual) {
      assert.strictEqual(typeof value, 'object', error);
    }
    assert.notStrictEqual(actual[0], actual[1], error);

    let alcool = actual[0].details.productId.includes('123');
    let mascara = actual[1].details.productId.includes('123');

    assert.strictEqual(alcool, true, error);
    assert.strictEqual(mascara, true, error);
  });
});
