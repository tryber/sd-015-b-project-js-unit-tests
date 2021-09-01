const assert = require('assert');
const createMenu = require('../src/restaurant');
 
/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: FAÇA OS TESTES E PASSOS DE ACORDO COM A ORDEM INDICADA!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('10 - Implemente os casos de teste e a função `createMenu`', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    let expected;
    let actual;
    const testMenu = { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} };
    // TESTE 1: Verifique se o retorno da função createMenu() é um objeto que possui, 
    // mas não é necessariamente é limitado à chave `fetchMenu`, a qual tem como valor uma função.
    // ```
    // const objetoRetornado = createMenu(); // Retorno: { fetchMenu: () => {}, ... }
    // ```
    //// Verifica se a saida é ou um objeto
    actual = typeof createMenu(testMenu);
    expected = 'object';
    assert.deepStrictEqual(actual, expected);
    //// Verifica se a saida não é um array
    actual = Array.isArray(createMenu(testMenu));
    expected = false;
    assert.strictEqual(actual, expected);
    //// Verifica se dentro do objeto de saída há uma chave chamada fetchMenu
    actual = Object.keys(createMenu(testMenu)).indexOf('fetchMenu');
    expected = -1;
    assert.notStrictEqual(actual, expected);
    //// Verifica se a chave fetchMenu é uma função
    actual = typeof createMenu(testMenu).fetchMenu;
    expected = 'function';
    assert.strictEqual(actual, expected);
    //// Verifica se dentro do objeto de saída so tem uma chave
    actual = Object.keys(createMenu(testMenu)).length;
    expected = 1;
    assert.notStrictEqual(actual, expected);
    // TESTE 2: Verifique que, dado que a função createMenu foi chamada com o objeto: `{ food: {}, drink: {} }`, 
    // verifique que 'objetoRetornado.fetchMenu()' retorna um objeto cujas chaves são somente `food` e `drink`.
    // ```
    // const objetoRetornado = createMenu({ food: {}, drink: {} });
    // objetoRetornado.fetchMenu() // Retorno: { food: {}, drink: {}}
    // ```
    //// Verifica se a saída 'objetoRetornado.fetchMenu()' é realmente um objeto
    actual = typeof createMenu(testMenu).fetchMenu();
    expected = 'object';
    assert.strictEqual(actual, expected);
    //// Verifica se a saída 'objetoRetornado.fetchMenu()' não é um array
    actual = Array.isArray(createMenu(testMenu).fetchMenu());
    expected = false;
    assert.strictEqual(actual, expected);
    //// Verifica se a saída é um objecto com somente duas chaves food e drink
    actual = Object.keys(createMenu(testMenu).fetchMenu()).sort();
    expected = ['food', 'drink'].sort();
    assert.deepStrictEqual(actual, expected);
    // TESTE 3: Verifique que o menu passado pra função createMenu é identico ao menu recuperado pela função 'objetoRetornado.fetchMenu'
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.fetchMenu() // Retorno: objetoQualquer
    // ```
    // Agora faça o PASSO 1 no arquivo `src/restaurant.js`.
    //// Verifica se a saída objetoRetornado.fetchMenu() é igual ao menu de entrada
    actual = createMenu(testMenu).fetchMenu();
    expected = testMenu;
    assert.deepStrictEqual(actual, expected);
    // --------------------------------------------------------------------------------------
    // TESTE 4: Verifique que 'objetoRetornado.consumption', após a criação do menu, retorna um array vazio.
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.consumption // Retorno: []
    // ```
    // Agora faça o PASSO 2 no arquivo `src/restaurant.js`.
    //// Verifica que o objetoRetornado.consumption é um array
    actual = Array.isArray(createMenu(testMenu).consumption);
    expected = true;
    assert.strictEqual(actual, expected);
    //// Verifica se o array de retorno é vazio
    actual = createMenu(testMenu).consumption.length;
    expected = 0;
    assert.strictEqual(actual, expected);
    // --------------------------------------------------------------------------------------
    // TESTE 5: Verifique que chamar uma função associada à chave `order` no objeto retornado, passando uma string como parâmetro, 
    // como `objetoRetornado.order('coxinha')`, tal string é adicionada ao array retornado em `objetoRetornado.consumption
    // ```
    // const objetoRetornado = createMenu(objetoQualquer);
    // objetoRetornado.order("coxinha");
    // objetoRetornado.consumption // Retorno: ["coxinha"]
    // ```
    // Agora faça o PASSO 3 no arquivo `src/restaurant.js`.
    //// Verifica se o objetoRetornado possui a chave order
    actual = Object.keys(createMenu(testMenu)).indexOf('order');
    expected = -1;
    assert.notStrictEqual(actual, expected);
    //// Verifica se o objetoRetornado.order é realmente uma função
    actual = typeof createMenu(testMenu).order;
    expected = 'function';
    assert.strictEqual(actual, expected);
    //// Verifica se a objetoRetornado.order(str) adiciona str em objetoRetornado.consumption
    actual = createMenu(testMenu);
    actual.order('coxinha');
    actual = actual.consumption;
    expected = ['coxinha'];
    assert.deepStrictEqual(actual, expected);
    // --------------------------------------------------------------------------------------
    // TESTE 6: Verifique que as três orders seguintes, de bebidas e comidas mescladas, somam três itens no array `objetoRetornado.consumption` conforme os itens pedidos.
    // ```
    // objetoRetornado.order("coxinha");
    // objetoRetornado.order("agua");
    // objetoRetornado.order("sopa");
    // objetoRetornado.order("sashimi");
    // objetoRetornado.consumption // Retorno: ["coxinha", "agua", "sopa", "sashimi"]
    // ```
    // Agora faça o TESTE 7 deste arquivo.
    //// Verifica se ao acrescentar 4 itens eles preenchiram o objetoRetornado.consumption
    actual = createMenu(testMenu);;
    actual.order('coxinha');
    actual.order('agua');
    actual.order('sopa');
    actual.order('sashimi');
    actual = actual.consumption;
    expected = ["coxinha", "agua", "sopa", "sashimi"];
    assert.deepStrictEqual(actual, expected);
    // --------------------------------------------------------------------------------------
    // TESTE 7: Verifique que a função `order` aceita que pedidos repetidos sejam acrescidos a consumption.
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.comsuption // Retorno: ['coxinha', 'agua', 'coxinha']
    // ```
    // Agora faça o TESTE 8 deste arquivo.
    // --------------------------------------------------------------------------------------
    // TESTE 8: Verifique que, ao chamar `objetoRetornado.pay()`, retorna-se a soma dos preços de tudo que foi pedido, conforme registrado em `objetoRetornado.consumption`
    // ```
    // objetoRetornado.order('coxinha');
    // objetoRetornado.order('agua');
    // objetoRetornado.order('coxinha');
    // objetoRetornado.pay() // Retorno: somaDosPreçosDosPedidos
    // ```
    // Agora faça o PASSO 4 no arquivo `src/restaurant.js`.
  });
});
