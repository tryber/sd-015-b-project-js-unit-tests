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

const average = (arr) => {
  const size = arr.length;
  let notNumber = false;
  for (i=0; i<size; i+=1){
    if (typeof(arr[i]) !== "number"){
      notNumber = true;
    }
  }

  if (size===0 || notNumber){
    return undefined;
  }

  const calc = arr.reduce((prevVal, currVal) => prevVal + currVal, 0);
  return Math.round(calc/size);
};

module.exports = average;
