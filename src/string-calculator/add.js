function add(input) {
  if (input === "") {
    return "0"
  }

  function numberWithoutFloatingPointErrors() {
    return Math.round(total * 1e10) / 1e10;
  }

  let total = 0;
  for (const number of input.split("\n").join(",").split(",")) {
    total+= Number(number);
  }

  return numberWithoutFloatingPointErrors().toString()
}

module.exports = add;
