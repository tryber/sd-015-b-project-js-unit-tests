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

// consultei o repositorio do André Luiz S. pois estava tento dificuldades pois estava com dificuldade no typeof e no Math.Round
// https://github.com/tryber/sd-015-b-project-js-unit-tests/commit/e6b6190926b6efbc188394c111c3ffa451f8d432
const average = (array) => {
  if (typeof array[0] === 'undefined') { return undefined; } 
  let results = 0;
  let soma = 0;
  for (let i = 0; i < array.length; i = +1) {
      if (typeof array[i] !== 'number') { return undefined; }
      
      soma += array[i];
  }
   
  results = soma / array.length;
  return Math.round(results);
};

console.log(average([]));
module.exports = average;