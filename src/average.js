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

// function media(list) {
//   let sum = 0;
//   for (let index = 0; index < list.length; index += 1) {
//     sum += list[index];
//   }
//   let resultado = Math.round(sum / list.length);
//   return resultado;
// }

// function verificaString(list) {
//   for (let index = 0; index < list.length; index += 1) {
//     if (typeof list[index] === 'string') {
//       return undefined;
//     }
//   }
//   return media(list);
// }

const average = (numbers) => {
  let sum = 0;
  
  if (numbers.length === 0) {
    return undefined;
  }

  for (const number of numbers) {
    sum += number;
  }

  if (typeof sum !== 'number') {
    return undefined;
  }

  return Math.round(sum / numbers.length);
};

module.exports = average;