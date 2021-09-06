/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (array) => {
  if (array.length === 0) {
    return undefined;
  }
  let final = 0;
  for (let i = 0; i < array.length; i += 1) {
  if (typeof array[i] !== 'number') {
    return undefined;
  } 
    final += array[i];
  }
  return Math.round(final / array.length);
  };

module.exports = average;

// para arrumar os erros do meu codigo pesquisei em https://github.com/tryber/sd-015-b-project-js-unit-tests/pull/132 e no https://developer.mozilla.org/
