import Car from "./Car.js";

class RacingGame {
  constructor(carNames) {
    this.cars = carNames.map((name) => new Car(name));
  }

  playRound() {
    this.cars.forEach((car) => {
      car.move();
    });

    return this.cars.map((car) => ({
      name: car.getName(),
      position: car.getPosition(),
    }));
  }
  getWinners() {}
}

export default RacingGame;
