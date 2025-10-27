import { readCarNames, readTryCount } from "./view/InputView.js";
import RacingGame from "./model/RacingGame.js";
import { printRoundResult, printStartMessage } from "./view/OutputView.js";

class App {
  async run() {
    const carNames = await readCarNames();
    const tryCount = await readTryCount();

    const racingGame = new RacingGame(carNames);

    printStartMessage();
    for (let index = 0; index < tryCount; index++) {
      printRoundResult(racingGame.playRound());
    }
  }
}

export default App;
