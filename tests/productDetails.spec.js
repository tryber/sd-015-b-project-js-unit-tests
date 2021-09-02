const assert = require('assert');
const { type } = require('os');
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
    const Arraytype = Array.isArray(productDetails('Alcool gel', 'Máscara'));
    const pureArray = productDetails('Alcool gel', 'Máscara')

    assert.strictEqual(Arraytype, true, 'Não é um array')
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails.length, 2, 'Não tem dois itens');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof pureArray[0] && typeof pureArray[1], 'object', 'Não são Objetos');
    // Teste que os dois objetos são diferentes entre si.
    assert.strictEqual(pureArray[0] !== pureArray[1], true, 'Os arrays não são iguais');
    // Teste que os dois productIds terminam com 123.
    const string1 = pureArray[0].details.productId.substr(-3);
    const string2 = pureArray[1].details.productId.substr(-3);
    assert.strictEqual(string1 && string2, '123', 'Não são iguais');
  });
});
