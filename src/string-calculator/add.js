function add(input) {
  if (input === "") {
    return "0"
  }

  adjacentSeparators = [",\n", "\n,", "\n\n", ",,"];

  for (const separator of adjacentSeparators) {
    const index = input.indexOf(separator);
    if (index !== -1) {
      return `Number expected but '${separator[1]}' found at position ${index + 1}.`;
    }
  };
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
