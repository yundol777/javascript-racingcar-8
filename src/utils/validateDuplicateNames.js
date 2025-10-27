function validateDuplicateNames(carNames) {
  const unique = new Set(carNames);

  if (carNames.length !== unique.size)
    throw new Error("[ERROR] 이름은 중복될 수 없습니다.");
}

export default validateDuplicateNames;
