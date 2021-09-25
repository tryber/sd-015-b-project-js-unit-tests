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

const average = (numbers) => {
  let numbersAverage = 0;
  let count = 0;
  if (numbers.length === 0) {
    return undefined;
  }
  for (let i = 0; i < numbers.length; i += 1) {
    if (typeof numbers[i] !== 'string') {
      numbersAverage += numbers[i];
      count += 1;
    } else {
      return undefined;
    }
  }
  return Math.round(numbersAverage / count);
};

let test = [];
console.log(average(test));
module.exports = average;
