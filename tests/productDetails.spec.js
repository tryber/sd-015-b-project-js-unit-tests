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
    assert.strictEqual(Array.isArray(productDetails('productA', 'productB')), true);
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('productA', 'productB').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.strictEqual(typeof productDetails('productA', 'productB'), 'object');
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepEqual(productDetails('productA', 'productB')[0], productDetails('productA', 'productB')[1]);
    // Teste que os dois productIds terminam com 123.
    const products = () => {
      const productsAmount = productDetails('firstProduct', 'secondProduct').length;
      let product = '';
      let result = true;
      for (let i = 0; i < productsAmount; i += 1) {
        product = Object.values(productDetails('firstProduct', 'secondProduct')[i].details);
        if (!(product.join().includes('123'))) {
          result = (product.join().includes('123'));
        }
      }
      return result;
    };

    assert.strictEqual(products(), true);
  });
});
