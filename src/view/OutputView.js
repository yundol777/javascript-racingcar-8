import { Console } from "@woowacourse/mission-utils";

export function printStartMessage() {
  Console.print("\n실행 결과");
}

export function printRoundResult(roundResult) {
  roundResult.map((result) => {
    Console.print(`${result.name} : ${"-".repeat(result.position)}`);
  });

  Console.print("");
}

export function printWinners(winners) {
  Console.print(`최종 우승자 : ${winners.join(", ")}`);
}
