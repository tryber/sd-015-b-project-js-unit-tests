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
  let cont = 0;
  let soma = 0;
  let media = 0; 
  
  if (!array.length) { // https://cibersistemas.pt/tecnologia/como-verificar-se-um-array-javascript-esta-vazio-ou-nao-com-length/
      return undefined;
  }

  for (let num = 0; num < array.length; num += 1) {
    if (typeof array[num] !== 'number') {
      return undefined;
    }
    cont += 1;
    soma += array[num];
    media = soma / cont;
  }
  return Math.round(media);
};

module.exports = average;
