/* eslint-disable complexity */
/* eslint-disable no-unused-expressions */
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

// eslint-disable-next-line sonarjs/cognitive-complexity
const average = (a) => {
const array = a;
if (array.length === 0) {
return undefined;
}
let soma = 0;
let arrayNumericoNãoVazio = true;
for (let i = 0; i < array.length; i += 1) {
    soma += array[i];
if (typeof a[i] !== 'number') {
arrayNumericoNãoVazio = false;
}  
}
const media = soma / array.length;
const mediaArredonada = Math.round(media);
if (arrayNumericoNãoVazio === true) {
return mediaArredonada;
} 
if (arrayNumericoNãoVazio === false) {
return undefined;
}
};

console.log(average([1, 1]));
module.exports = average;
