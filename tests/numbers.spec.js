/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const numbers = require('../src/numbers');

/*
  A função numbers recebe um array (tamanho variável) e retorna true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário', () => {
    // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    const entrada = numbers([1, 2, 3, 4, 5]);
    assert.deepStrictEqual(entrada, true, 'Erro, não retornou true!')
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    const entrada2 = numbers([1, 2, '3', 4, 5]);
    assert.deepStrictEqual(entrada2, false, 'Não retornou false!');
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    const entrada3 = numbers([1, 'a', 3]);
    assert.deepStrictEqual(entrada3, false, 'Não está retornando false para string!')
    // Escreva um teste em que a função recebe [' '] e retorna false
    const entrada4 = numbers(['']);
    assert.deepStrictEqual(entrada4, false, 'Não retorna false para conjunto vazio!');
  });
});
