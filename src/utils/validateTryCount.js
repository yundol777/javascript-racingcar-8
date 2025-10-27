function validateTryCount(tryCount) {
  if (Number.isNaN(tryCount))
    throw new Error("[ERROR] 시도 횟수는 숫자여야 합니다.");
  if (tryCount <= 0) throw new Error("[ERROR] 시도 횟수는 0보다 커야 합니다.");
}

export default validateTryCount;
