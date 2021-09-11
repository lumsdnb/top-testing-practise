const capitalizeString = (str) => {
  let firstChar = str.slice(0, 1);
  let rest = str.slice(1);
  firstChar = firstChar.toUpperCase();
  rest = rest.toLowerCase();
  return firstChar + rest;
};

module.exports = capitalizeString;
