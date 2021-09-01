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

function parseArray(array) {
  let sum = 0;
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    if (typeof array[i] !== 'number') {
      return undefined;
    }
    sum += array[i];
  }
  const arrayAverage = Math.round(sum / arrayLength);
  return arrayAverage;
}

function checkArray(array) {
  const arrayLength = array.length;
  if (arrayLength === 0) {
    return undefined;
  }
  return parseArray(array);
}

const average = (array) => checkArray(array);

module.exports = average;
