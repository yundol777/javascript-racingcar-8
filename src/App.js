import { Console } from "@woowacourse/mission-utils";
import { readCarNames, readTryCount } from "./view/InputView.js";

class App {
  async run() {
    const carNames = await readCarNames();
    Console.print(carNames);

    const tryCount = await readTryCount();
    Console.print(tryCount);
  }
}

export default App;
