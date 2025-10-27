import { Console } from "@woowacourse/mission-utils";
import { readCarNames } from "./view/InputView.js";

class App {
  async run() {
    const carNames = await readCarNames();
    Console.print(carNames);
  }
}

export default App;
