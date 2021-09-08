/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/

const myCounter = () => {
  const myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    myArray.push(counter);
    for (counter = 2; counter <= 3; counter += 1) {
      myArray.push(counter);
    }
  }
  return myArray;
};

/**
 * ! Não se pode usar o var, pois ele é 'funciton scoped', ou seja, os dois loops for tem acesso ao valor var. Dessa forma os loops seriam: counter = 0 / counter = 2 --> quando voltar para o primeiro for, o counter será igual a 2.
 * * Já com o let, que é 'block scoped', os valores de counter sao contidos nos loops for e, por isso, atuam de forma independente.
 */

console.log(myCounter());

module.exports = myCounter;
