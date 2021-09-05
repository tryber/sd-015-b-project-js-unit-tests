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

const calculator = {
  add: (input1, input2) => Math.floor(input1 + input2),
  mult: (input1, input2) => Math.floor(input1 * input2),
  div: (input1, input2) => Math.floor(input1 / input2),
  sub: (input1, input2) => Math.floor(input1 - input2),
};

module.exports = calculator;
