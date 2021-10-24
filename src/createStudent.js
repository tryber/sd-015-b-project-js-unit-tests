/* eslint-disable no-undef */
/* eslint-disable object-shorthand */
/* eslint-disable sonarjs/no-use-of-empty-return-value */
/*
  Dada uma função chamada createStudent que recebe como parâmetro um nome,
  retorne um objeto que contenha duas chaves:
    (1) name, contendo o nome passado como parâmetro;
    (2) feedback, contendo uma função que retorna a frase 'Eita pessoa boa!' ao ser chamada.

  Faça a função da chave feedback com arrow functions!

  Parâmetros:
    - Uma string;
  Comportamento:
    const estudante = createStudent('Leandrão, o Lobo Solitário')

    estudante.name // Retorna: 'Leandrão, o Lobo Solitário'
    estudante.feedback() // Retorna: 'Eita pessoa boa!'
*/

const createStudent = (name) => {
  const nameOfStudent = name;
  const estudanteObj = {
  name: nameOfStudent,
  feedback: () => 'Eita pessoa boa!',
  };
return estudanteObj;
};
const estudante = createStudent('Leandrão, o Lobo Solitário');
module.exports = createStudent;
console.log(estudante.name);