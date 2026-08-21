function add(input) {
  if (input === "") {
    return "0"
  }
  let total = 0;
  for (const number of input.split(",")) {
    total+= Number(number);
  }
  return total.toString();
}

module.exports = add;
