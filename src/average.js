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
  const numbers = Object.values(array);
  let sumOfArray = 0;
  let averageOfArray = 0;
  let result;

  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] === 'string' || numbers.length === 0) {
      result = undefined;
      break;
    } else {
      sumOfArray = numbers[i] + sumOfArray;
      averageOfArray = sumOfArray / numbers.length;
      result = (Math.round(averageOfArray));
    }
  }
  return (result);
};

module.exports = average;