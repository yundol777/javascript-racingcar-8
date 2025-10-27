import Car from "./Car";

class RacingGame {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  playRound() {}
  getWinners() {}
}

export default RacingGame;
