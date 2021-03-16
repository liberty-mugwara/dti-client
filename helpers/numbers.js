export const toHex = (number, base = 10) => {
  return toBase10(number, base).toString(16);
};

export const toBase10 = (number, base) => {
  if (typeof base !== 'number')
    throw Error('number base should be of type number');

  const value = parseInt(number + '', base);
  return +value.toString(10);
};
