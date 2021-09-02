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

const vqv = (nome, idade) => {
  const name = nome;
  const age = idade;
  if (name === undefined && age === undefined) {
    return undefined;
  }
  const meuNome = `Oi, meu nome é ${name}!\n`;
  const minhaIdade = `Tenho ${age} anos,\n`;
  const minhaProfissao = 'trabalho na Trybe e mando muito em programação!\n';
  const meuSloga = '#VQV!';
  return `${meuNome}${minhaIdade}${minhaProfissao}${meuSloga}`;
};
module.exports = vqv;
