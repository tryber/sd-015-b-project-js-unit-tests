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
    const funcao = productDetails('Arroz', 'Feijão');
    assert.strictEqual(Array.isArray(funcao), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(funcao.length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const firstIsObj = typeof funcao[0] === 'object';
    const secondIsObj = typeof funcao[1] === 'object';
    assert.strictEqual(firstIsObj === secondIsObj, true);
    // Teste que os dois objetos são diferentes entre si.
    const firstObj = Object.values(funcao[0]);
    const secondObj = Object.values(funcao[1]);
    assert.strictEqual(firstObj[0] === secondObj[0], false);
    // Teste que os dois productIds terminam com 123.
    const firstID = Object.values(firstObj[1])[0];
    const firstId123 = firstID.substring((firstID.length - 3), firstID.length);
    const secondId = Object.values(secondObj[1])[0];
    const secondId123 = secondId.substring((secondId.length - 3), secondId.length);
    const verifyFirstId = firstId123 === '123';
    const verifySecondId = secondId123 === '123';
    assert.strictEqual(verifyFirstId === verifySecondId, true);
  });
});
