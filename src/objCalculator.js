/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const numbers = [1, 2, 3, 5, 10];

const calculator = {
add: () => numbers[0] + numbers[2],
mult: () => numbers[4] * numbers[2],
div: () => Math.floor(numbers[3] / numbers[1]),
sub: () => numbers[0] - numbers[2],
};

module.exports = calculator;
