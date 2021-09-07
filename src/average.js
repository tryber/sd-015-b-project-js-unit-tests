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
const mediaDosNumeros = (num) => {
  let somaDosNumeros = 0;
  for (const val of num) {
    somaDosNumeros += val;
 }
 return Math.round(somaDosNumeros / num.length);
};

const average = (num) => {
  let media = 0;
  const verificador = num.every((cadaNumero) => Number.isInteger(cadaNumero));
  console.log(`verificador ${verificador}`);
    if (num.length === 0) {
  media = undefined;
  } else if (verificador) {
  media = mediaDosNumeros(num);
  } else {
    media = undefined;
  }

console.log(`media ${media}`);
  return (media);
};

module.exports = average;