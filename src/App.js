import { Console } from "@woowacourse/mission-utils";
import { readCarNames, readTryCount } from "./view/InputView.js";
import RacingGame from "./model/RacingGame.js";

class App {
  async run() {
    const carNames = await readCarNames();
    Console.print(carNames);

    const tryCount = await readTryCount();
    Console.print(tryCount);

    const racingGame = new RacingGame(carNames);
  }
}

export default App;
