const { getLineInfo } = require('acorn');
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
    assert.strictEqual(Array.isArray(productDetails('a', 'z')), true); // https://pt.stackoverflow.com/questions/77190/como-saber-se-um-objeto-%C3%A9-um-array-em-javascript-sem-jquery         //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(Object.keys(productDetails('a', 'z')).length, 2);

    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('a', 'z')[0], 'object');
    assert.strictEqual(typeof productDetails('a', 'z')[1], 'object');

    //assert.deepStrictEqual(typeof productDetails('Alcool gel', 'Máscara'),'object');
    // Teste que os dois objetos são diferentes entre si.
      assert.ok(productDetails('a', 'z')[0] !== productDetails('a', 'z')[1]);
    
      // assert.strictEqual(typeof productDetails('a', 'z')[0], 'object');Teste que os dois productIds terminam com 123.
    assert.strictEqual(Object.values(Object.values(productDetails('Alcool gel', 'Máscara')[0])[1])[0].endsWith('123'), true);
    assert.strictEqual(Object.values(Object.values(productDetails('Alcool gel', 'Máscara')[1])[1])[0].endsWith('123'), true);
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
    //https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/javascript-es6-objects/solutions/069bdfff-c92d-4c55-9e90-94cd03d7553e/gabarito-dos-exercicios/009cc087-bb8c-4f0a-9ec3-f63f990b6c8e?use_case=calendar
  });
});
