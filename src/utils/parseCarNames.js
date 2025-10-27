function parseCarNames(carNamesInput) {
  const carNames = carNamesInput.split(",").map((name) => name.trim());
  return carNames;
}

export default parseCarNames;
