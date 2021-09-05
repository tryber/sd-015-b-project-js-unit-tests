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

// const average = (array) => {
//   const typeArray = typeof(array);
//   for (i=0; i<array.length; i+=1) {
//     if (typeArray !== "number"){
//       return "undefined";
//     }
//   }

//   const calc = array.reduce((previousVal, currentVal) => previousVal + currentVal, 0) / array.length;
//   const finalArray = Math.round(calc);
//   console.log(finalArray);

//   return finalArray;
// }
const average = (array) => {
  const size = array.length;
  let sum = 0;
  const check = array.some((value) => typeof value !== 'number');
  if (check === true || size < 1) {
    return undefined;
  }
  for (let index = 0; index < size; index += 1) {
    let number = Math.round(array[index]);
    sum += number;
  }
  return Math.round(sum / size);
};

module.exports = average;
