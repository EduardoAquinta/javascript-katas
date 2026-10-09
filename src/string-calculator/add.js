function add(input) {

  if (input === "") {
    return "0"
  }

  try {
    if(input.startsWith("//")){
      let cleanse = input.substring(2)
      const arr = cleanse.split("\n");
      const separator = arr[0];
      input = arr[1].replaceAll(separator, ",");
    }

    // Todo: Replace new lines in input with commas

    const error = _validateInput(input);
    if (error) {
      return error;
    }

    let total = 0;
    for (const number of _splitByNewLineOrComma(input)) {
      total += Number(number);
    }

    return _numberWithoutFloatingPointErrors(total).toString()
  } catch (error) {
    return error.message;
  }

  // Private functions
  function _splitByNewLineOrComma(input) {
    // Simplify below when only needs to handle commas
    return input.split("\n").join(",").split(",");
  }

  function _numberWithoutFloatingPointErrors(total) {
    return Math.round(total * 1e10) / 1e10;
  }

  function _validateInput(input) {
    _endsWithSeparator(input);
    _hasAdjacentSeparators(input);
  }

  function _endsWithSeparator(input) {
    if (input.endsWith("\n") || input.endsWith(",")) {
      throw new Error('Number expected but EOF found.');
    }
  }

  function _hasAdjacentSeparators(input) {
    const adjacentSeparators = [",\n", "\n,", "\n\n", ",,"];
    for (const separatorPair of adjacentSeparators) {
      const index = input.indexOf(separatorPair);
      if (index !== -1) {
        throw new Error(`Number expected but '${separatorPair[1]}' found at position ${index + 1}.`);
      }
    }
  }
}


module.exports = add;
