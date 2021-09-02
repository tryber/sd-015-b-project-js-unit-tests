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
// após fica travado no exercicio visitei o github de Paulo Flóra https://github.com/tryber/sd-015-b-project-js-unit-tests/pull/36/commits/01884a50403c94a7d5c2acba92ca34b31663fb29 
// afim de entender o requesito e após entender como o resultado foi feito
// e após 3 tentativas sem olhar ou consultar consegui entender o requesito
const vqv = (nome, idade) => {
  if (typeof nome !== 'string') {
    return undefined;
  }
  const presentation = `Oi, meu nome é ${nome}!\n`
  + `Tenho ${idade} anos,\n`
  + 'trabalho na Trybe e mando muito em programação!\n'
  + '#VQV!';
  return presentation;
};

module.exports = vqv;
