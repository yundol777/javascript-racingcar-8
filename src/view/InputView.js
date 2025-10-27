import { Console } from "@woowacourse/mission-utils";
import parseCarNames from "../utils/parseCarNames.js";
import validateCarNames from "../utils/validateCarNames.js";
import parseTryCount from "../utils/parseTryCount.js";
import validateTryCount from "../utils/validateTryCount.js";
import validateDuplicateNames from "../utils/validateDuplicateNames.js";

export async function readCarNames() {
  const carNamesInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );

  const carNames = parseCarNames(carNamesInput);
  validateCarNames(carNames);
  validateDuplicateNames(carNames);

  return carNames;
}

export async function readTryCount() {
  const tryCountInput = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );

  const tryCount = parseTryCount(tryCountInput);
  validateTryCount(tryCount);

  return tryCount;
}
