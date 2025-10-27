import { MissionUtils } from "@woowacourse/mission-utils";
import { readTryCount } from "../src/view/InputView";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("시도할 횟수 입력(readTryCount) 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("정상 입력 시, 숫자로 변환되어 반환", async () => {
    const inputs = ["5"];
    mockQuestions(inputs);

    const result = await readTryCount();

    expect(result).toBe(5);
  });

  test("0 이하의 숫자 입력 시, 오류 반환", async () => {
    const inputs = ["0"];
    mockQuestions(inputs);

    await expect(readTryCount()).rejects.toThrow("[ERROR]");
  });

  test("숫자가 아닌 값 입력 시, 오류 반환", async () => {
    const inputs = ["@"];
    mockQuestions(inputs);

    await expect(readTryCount()).rejects.toThrow("[ERROR]");
  });

  test("빈 문자열 입력 시, 오류 반환", async () => {
    const inputs = [""];
    mockQuestions(inputs);

    await expect(readTryCount()).rejects.toThrow("[ERROR]");
  });
});
