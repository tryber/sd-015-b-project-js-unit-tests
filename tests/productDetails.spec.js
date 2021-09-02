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
      // Utilizarei o conceito de Array.isArray([]) visto no site https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery
    const checker = productDetails('Alcool gel', 'Mascara');
    assert.strictEqual(Array.isArray(checker), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(checker.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const productOne = checker[0];
    const productTwo = checker[1];
    assert.strictEqual(typeof productOne === 'object' && typeof productTwo === 'object', true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productOne, productTwo);
    // Teste que os dois productIds terminam com 123.
    const productOneLastThree = productOne.details.productId.slice(-3);
    const productTwoLastThree = productTwo.details.productId.slice(-3);
    assert.deepStrictEqual(productOneLastThree && productTwoLastThree, '123');
  });
});
