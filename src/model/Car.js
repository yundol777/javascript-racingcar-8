import { MissionUtils } from "@woowacourse/mission-utils";

class Car {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }

  move() {
    const randNum = MissionUtils.Random.pickNumberInRange(0, 9);
    if (4 <= randNum) this.position++;
  }

  getName() {
    return this.name;
  }
  getPosition() {
    return this.position;
  }
}

export default Car;
