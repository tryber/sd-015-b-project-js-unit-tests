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
    const entrada1 = productDetails('Alcool gel', 'Máscara');
    const tipo1 = typeof entrada1;
    assert.deepStrictEqual(tipo1, "object", 'Não é um array');
    // Teste que o array retornado pela função contém dois itens dentro.
    const entrada2 = productDetails('Alcool gel', 'Máscara');
    const tamanho = entrada2.length;
    assert.deepStrictEqual(tamanho, 2, 'Tamanho inválido retornado');
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    const entrada3 = productDetails('Alcool gel', 'Máscara');
    const item1 = entrada3[0];
    const tipo = typeof item1;
    const item2 = entrada3[1];
    const tipo2 = typeof item2;
    assert.deepStrictEqual(tipo, "object", 'O primeiro item retornado não é um array');
    assert.deepStrictEqual(tipo2, "object", 'O segundo item retornado não é um array!');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepEqual(item1, item2, 'Os itens são iguais!');
    // Teste que os dois productIds terminam com 123.
  });
});
