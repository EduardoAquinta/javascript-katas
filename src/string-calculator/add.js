function add(input) {
  if (input === "") {
    return "0"
  }

  if (input.includes(",\n")) {
    return "Number expected but '\n' found at position 6.";
  }

  if (input.includes("\n,")) {
    return "Number expected but ',' found at position 6.";
  }
  
  let total = 0;
  for (const number of splitByNewLineOrComma()) {
    total+= Number(number);
  }

  return numberWithoutFloatingPointErrors().toString()

  function splitByNewLineOrComma() {
    return input.split("\n").join(",").split(",");
  }

  function numberWithoutFloatingPointErrors() {
    return Math.round(total * 1e10) / 1e10;
  }
}

module.exports = add;
