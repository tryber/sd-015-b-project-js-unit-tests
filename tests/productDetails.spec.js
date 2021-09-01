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
    const productDetailsTest = productDetails('Alcool', 'Máscara');
    assert.ok(Array.isArray(productDetailsTest), 'ERROR: Return is not an array');
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool', 'Máscara').length, 2, 'ERROR: Number of itens unexpected')
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const isItObject = () => {
      const usedFunction = productDetails('Alcool', 'Máscara');
      let objectOrNo = true;
      for (let index = 0; index < usedFunction; index += 1) {
        if (usedFunction[index] !== 'object') {
          objectOrNo = false;
        }
      }
      return objectOrNo;
    }

    assert.ok(isItObject, 'ERROR: At least one of the items is not an object')
    // Teste que os dois objetos são diferentes entre si.
    const productsEntries = Object.entries(productDetails('Alcool', 'Máscara'));
    assert.notDeepStrictEqual(productsEntries[0], productsEntries[1], 'ERROR: Objects are equal');
    // Teste que os dois productIds terminam com 123.
    const productIdsChecker1 = productDetailsTest[0].details.productId;
    const productIdsChecker2 = productDetailsTest[1].details.productId;
    assert.strictEqual(productIdsChecker1, 'Alcool123', 'ERROR: Product id does not end with 123');
    assert.strictEqual(productIdsChecker2, 'Máscara123', 'ERROR: Product id does not end with 123')
  });
});
