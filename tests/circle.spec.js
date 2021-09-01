/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna um objeto.
    const entrada = circle(1, 2);
    const tipo = typeof entrada;
    const objeto = typeof {}
    assert.deepStrictEqual(tipo, objeto, 'Não está retornando um objeto' )
    // Teste se o objeto retornado tem 3 entradas.
    const entrada1 = circle(2)
    const retorno = Object.values(entrada1).length;
    assert.deepStrictEqual(retorno, 3, 'Não retorna três entradas');
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    const zerado = circle();
    assert.deepStrictEqual(zerado, undefined, 'Não está retornando undefined ao não receber valor!')
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    const entrada2 = circle(2);
    const circunferencia = entrada2.circumference;
    assert.deepStrictEqual(circunferencia, 12.56, 'Retorno inválio para 2, deveria ser 12.56');
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    const entrada3 = circle(3);
    const area = entrada3.area;
    assert.deepStrictEqual(area, 28.259999999999998, 'Retorno inválido para 3, deveria retornar 28.259999999999998')
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    const entrada4 = circle(3);
    const respostaCorreta = { radius: 3, area: 28.259999999999998, circumference: 18.84 }
    assert.deepStrictEqual(entrada4, respostaCorreta, 'Não retornou o esperado!')
  });
});
