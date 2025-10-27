import { Console } from "@woowacourse/mission-utils";
import parseCarNames from "../utils/parseCarNames.js";
import validateCarNames from "../utils/validateCarNames.js";

export async function readCarNames() {
  const carNamesInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );

  const carNames = parseCarNames(carNamesInput);
  validateCarNames(carNames);

  return carNames;
}
