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
    const arrayToTest = productDetails('teste1', 'teste2');
    assert.strictEqual(Array.isArray(arrayToTest), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(arrayToTest.length === 2, true);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const product1InArray = arrayToTest[0];
    const product2InArray = arrayToTest[1];
    const testTypeOfProducts = (typeof product1InArray === 'object' && typeof product2InArray === 'object');
    assert.strictEqual(testTypeOfProducts, true);
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(product1InArray, product2InArray);
    // Teste que os dois productIds terminam com 123.
    const objeto = productDetails('teste1', 'teste2');
    const teste = '123';
    const product1 = objeto[0].details.productId;
    let stringToCompare1 = '';
    let indexInProduct1 = product1.length - teste.length;
    for (let index = 0; index < teste.length; index += 1) {
      if (teste[index] === product1[indexInProduct1]) stringToCompare1 += product1[indexInProduct1];
      indexInProduct1 += 1;
    }
    let verificacao1 = (teste === stringToCompare1);
    const product2 = objeto[1].details.productId;
    let stringToCompare2 = '';
    let indexInProduct2 = product2.length - teste.length;
    for (let index = 0; index < teste.length; index += 1) {
      if (teste[index] === product2[indexInProduct2]) stringToCompare2 += product2[indexInProduct2];
      indexInProduct2 += 1;
    }
    let verificacao2 = (teste === stringToCompare2);
    assert.strictEqual((verificacao1 && verificacao2), true);
  });
});
