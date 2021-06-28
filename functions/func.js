function add(num1, num2) {
  const sum = num1 + num2;
  //   return 15;
  return sum;
}

function divide(n1, n2) {
  if (n2 === 0) return null;
  return n1 / n2;
}

console.log(add(5, 10));

module.exports = {
  add,
  divide,
};
