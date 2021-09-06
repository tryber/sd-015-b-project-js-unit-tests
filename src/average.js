const average = (array) => {
  let calc = 0;
  if (array.length === 0) return undefined;
  for (const number of array) {
    if (typeof number !== 'number') {
      return undefined;
    }
    calc += number;
  }
  const result = calc / array.length;
  return Math.round(result);
};

module.exports = average;
