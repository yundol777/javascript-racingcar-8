import { MissionUtils } from "@woowacourse/mission-utils";
import { readCarNames } from "../src/view/InputView";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("경주할 자동차 이름 입력(readCarName) 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("정상 입력 시, 콤마로 구분된 문자열을 배열로 반환", async () => {
    const inputs = ["pobi,woni,jun"];
    mockQuestions(inputs);

    const result = await readCarNames();

    expect(result).toEqual(["pobi", "woni", "jun"]);
  });

  test("빈 문자열 입력 시, 오류 반환", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    await expect(readCarNames()).rejects.toThrow("[ERROR]");
  });

  test("5자를 넘는 이름 입력 시, 오류 반환", async () => {
    const inputs = ["pobi,woni,longname"];
    mockQuestions(inputs);

    await expect(readCarNames()).rejects.toThrow("[ERROR]");
  });

  test("중복되는 이름 입력 시, 오류 반환", async () => {
    const inputs = ["pobi,woni,woni"];
    mockQuestions(inputs);

    await expect(readCarNames()).rejects.toThrow("[ERROR]");
  });
});
