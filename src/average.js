/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado. Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

/**
 * todo criar as primeiras condições: retornar undefined para arr.length === 0 e se houver algum valor nao numerio no array
 */

const isAllNumber = (arr) => {
  let isNumber = true;
  for (let item of arr) {
    if (typeof item !== 'number') {
      isNumber = false;
    }
  }
  return isNumber;
};

const average = (arr) => {
  // add your implementation here
  if (isAllNumber(arr) === false || arr.length === 0) {
    return undefined;
  }
  let sum = 0;
  for (let number of arr) {
    sum += number;
  }
  const meanInt = Math.round(sum / arr.length);

  return meanInt;
};

module.exports = average;
