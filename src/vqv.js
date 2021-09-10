/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

const assert = require('assert');

const vqv = (nome, idade) => {
  if (nome === null) {
    return undefined;
  }

  if (idade === null) {
    return undefined;
  }

  let resposta = `Oi, meu nome é ${nome}!\n
  Tenho ${idade}anos,\n
  trabalho na Trybe e manda muito em programação!\n
  #VQV!`;

  assert.strictEqual(resposta, undefined);

  };

module.exports = vqv;
