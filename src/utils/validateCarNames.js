function validateCarNames(carNames) {
  carNames.forEach((name) => {
    if (name.length === 0)
      throw new Error("[ERROR] 이름은 비어있을 수 없습니다.");
    if (name.length > 5)
      throw new Error("[ERROR] 이름은 5자를 초과할 수 없습니다.");
  });

  return true;
}

export default validateCarNames;
