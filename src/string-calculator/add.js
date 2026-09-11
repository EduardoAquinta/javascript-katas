function add(input) {

  if (input === "") {
    return "0"
  }

  const error = _validateInput(input);
  if (error) {
    return error;
  }

  let total = 0;
  for (const number of _splitByNewLineOrComma(input)) {
    total+= Number(number);
  }

  return _numberWithoutFloatingPointErrors(total).toString()

  // Private functions
  function _splitByNewLineOrComma(input) {
    return input.split("\n").join(",").split(",");
  }

  function _numberWithoutFloatingPointErrors(total) {
    return Math.round(total * 1e10) / 1e10;
  }

  function _validateInput(input) {
    const adjacentSeparators = [",\n", "\n,", "\n\n", ",,"];
    for (const separatorPair of adjacentSeparators) {
      const index = input.indexOf(separatorPair);
      if (index !== -1) {
        return `Number expected but '${separatorPair[1]}' found at position ${index + 1}.`;
      }
    }
  }
}


module.exports = add;
