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
  add: (num1, num2) => {
    if (Number.isInteger(num1) === true && Number.isInteger(num2) === true) { // visto em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
      return num1 + num2;
    }
  },
  mult: (num1, num2) => {
    if (Number.isInteger(num1) === true && Number.isInteger(num2) === true) {
      return num1 * num2;
    }  
  },
  div: (num1, num2) => {
    if (Number.isInteger(num1) === true && Number.isInteger(num2) === true) {
      return Math.floor(num1 / num2); // visto em: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    }  
  },
  sub: (num1, num2) => {
    if (Number.isInteger(num1) === true && Number.isInteger(num2) === true) {
      return num1 - num2;
    }
  },
  };
  console.log(calculator.add(1, 1));
  console.log(calculator.mult(2, 1));
  console.log(calculator.div(5, 2));
  console.log(calculator.sub(1, 1));

module.exports = calculator;
