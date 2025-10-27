import validateDuplicateNames from "../utils/validateDuplicateNames.js";
import Car from "./Car.js";

class RacingGame {
  constructor(carNames) {
    validateDuplicateNames(carNames);
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
  getWinners() {
    const maxPosition = Math.max(...this.cars.map((car) => car.getPosition()));

    return this.cars
      .filter((car) => car.getPosition() === maxPosition)
      .map((car) => car.getName());
  }
}

export default RacingGame;
