/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
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
    // assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    assert.strictEqual(getCharacter(), undefined)
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
    assert.strictEqual(typeof getCharacter('Arya'), 'object');
    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    assert.strictEqual(typeof getCharacter('Brienne'), 'object');
    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    assert.strictEqual(typeof getCharacter('Melissandre'), 'object');
    // Teste se a função se os parâmetros não são Case Sensitive.
    // Consultei o repositório do Kelvin Wevertor para resolver o item seguinte - link: https://github.com/tryber/sd-014-a-project-js-unit-tests/pull/119/commits/1c24944f7b2ce95b16be45948867bd2e9a85f43c
    assert.strictEqual(getCharacter('Arya'), getCharacter('ARya'));
    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
    assert.strictEqual(typeof getCharacter('Daniel'), 'undefined');
  });
});
