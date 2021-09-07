const assert = require('assert');

const productDetails = (firstProduct, secondProduct) => [
  {
    name: firstProduct,
    details: {
      productId: `${firstProduct}123`,
    },
  },
  {
    name: secondProduct,
    details: {
      productId: `${secondProduct}123`,
    },
  },
];

assert.strictEqual(Array.isArray(productDetails('Alcool gel', 'Máscara')), true);
assert.strictEqual(productDetails('Alcool gel', 'Máscara').length, 2);
assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara')[0], 'object');
assert.strictEqual(typeof productDetails('Alcool gel', 'Máscara')[1], 'object');
assert.strictEqual(productDetails('café', 'chá')[0] !== productDetails('café', 'chá')[1], true);
assert.strictEqual((productDetails('Café', 'Chá')[0]).details.productId.endsWith('123'), true);
assert.strictEqual((productDetails('Café', 'Chá')[1]).details.productId.endsWith('123'), true);