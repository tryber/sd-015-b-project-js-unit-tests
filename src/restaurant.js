function orderFromMenu(str) {
  return this.consumption.push(str);
}

const createMenu = (menu) => {
  const object = {
    fetchMenu: () => menu,
    consumption: [],
    order(str) { orderFromMenu.call(this, str); },
    pay() {
      const order = this.consumption;
      const foodNames = Object.keys(this.fetchMenu().food);
      const drinkNames = Object.keys(this.fetchMenu().drink);
      const foodValues = Object.values(this.fetchMenu().food);
      const drinkValues = Object.values(this.fetchMenu().drink);
      const names = foodNames.concat(drinkNames);
      const values = foodValues.concat(drinkValues);
      let sum = 0;
      for (let i of order) {
        let index = names.indexOf(i);
        sum += values[index];
      }
      return parseFloat((sum * 1.1).toFixed(2));
    },
  };
  return object;
};

module.exports = createMenu;
