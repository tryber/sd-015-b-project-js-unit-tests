const objeto = {
  fetchMenu: () => console.log('olá'),
}

menu = {food: {}, drink: {}};

function createMenu (menu) {
    let a = {
      fetchMenu: () => menu,
    }
    return a
}

console.log(createMenu());
console.log(createMenu(menu).fetchMenu())