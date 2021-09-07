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

// estava com dificuldade no ultimo requisito então consultei o repositorio do André Luiz S.
// https://github.com/tryber/sd-015-b-project-js-unit-tests/pull/102/commits/9205ebd68d65da5d8e338ab37eb7b6d9bf217396

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.ok(Array.isArray(productDetails('1', '2')), 'array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.ok(productDetails('1', '2'), 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('1', '2'), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.ok(productDetails(1) !== productDetails(2));
    // Teste que os dois productIds terminam com 123.
    const protudo = productDetails('1', '2');
    assert.strictEqual(protudo[0].details.productId.endsWith('123'), true);
    assert.strictEqual(protudo[1].details.productId.endsWith('123'), true);
  });
});
