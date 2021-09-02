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
    assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    //// Teste para verificar se é objeto
    let expected = ['object', 'object'];
    const receivedFunction = productDetails('Alcool gel', 'Máscara');
    let received = [typeof receivedFunction[0], typeof receivedFunction[1]];
    assert.deepStrictEqual(received, expected);
    //// Teste para verificar se o objeto não é array
    expected = [false, false];
    received = [Array.isArray(receivedFunction[0]), Array.isArray(receivedFunction[1])];
    assert.deepStrictEqual(received, expected);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(receivedFunction[0], receivedFunction[1]);
    // Teste que os dois productIds terminam com 123.
    const received0 = receivedFunction[0].details.productId.search('123');
    const received1 = receivedFunction[1].details.productId.search('123');
    received = [received0 !== -1, received1 !== -1];
    expected = [true, true];
    assert.deepStrictEqual(received, expected);
  });
});
