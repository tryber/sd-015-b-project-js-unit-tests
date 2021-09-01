const vqv = (nome, idade) => {
  if (typeof nome !== 'undefined' && typeof idade !== 'undefined') {
    const greetings = `Oi, meu nome é ${nome}!
    Tenho ${idade} anos,
    trabalho na Trybe e mando muito em programação!
    #VQV!`;
    return greetings;
  }
  return undefined;
};

let literal = vqv('henrique', 22);
console.log(literal.replace(/  +/g, ''));