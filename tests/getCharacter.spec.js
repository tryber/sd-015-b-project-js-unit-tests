/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const { get } = require('http');
const getCharacter = require('../src/getCharacter');

/*
Essa função recebe como parâmetro o nome de um personagem e retorna um objeto com seu nome, classe e frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna undefined.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

{
  name: 'Nome do Personagem',
  class: 'Classe do Personagem' ,
  phrases: ['frase1', 'frase2']
}

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Elabore testes para verificar se a função está funcionando de acordo com o proposto.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}

OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    const test1 = getCharacter();
    assert.strictEqual(test1, undefined);
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
    const test2 = getCharacter('Arya');
    const objectTest1 = {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: [ 'Not today', 'A girl has no name.' ],
    }
    assert.deepStrictEqual(Object.entries(test2), Object.entries(objectTest1));
    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    const test3 = getCharacter('Brienne');
    const objectTest2 = {
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: [ 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.' ],
    }
    assert.deepStrictEqual(Object.entries(test3), Object.entries(objectTest2));
    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    const test4 = getCharacter('Melissandre');
    const objectTest3 = {
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: [ 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.' ],
    }
    assert.deepStrictEqual(Object.entries(test4), Object.entries(objectTest3));
    // Teste se a função se os parâmetros não são Case Sensitive.
    const test5 = getCharacter('aRYA');
    assert.deepStrictEqual(Object.entries(test5), Object.entries(objectTest1));
    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
    const test6 = getCharacter('Joao');
    assert.strictEqual(test6, undefined);
  });
});
