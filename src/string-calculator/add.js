function add(input) {
  if (input === "") {
    return "0"
  }
  let total = 0;
  for (const number of input.split(",")) {
    total+= Number(number);
  }

  return (Math.round(total * 1e10) / 1e10).toString()
}

module.exports = add;
