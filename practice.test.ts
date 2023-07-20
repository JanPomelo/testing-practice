import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from "./practice";

describe("Capitalize function", () => {
  test("capitalize first letter", () => {
    expect(capitalize("hallo")).toBe("Hallo");
  });
  test("make second to last letter small", () => {
    expect(capitalize("HAHSEI")).toBe("Hahsei");
  });
  test("check string with whitespace", () => {
    expect(capitalize("hallo Ich Bin Du")).toBe("Hallo ich bin du");
  });
  test("check with numbers in string", () => {
    expect(capitalize("5Hsu7")).toBe("5hsu7");
  });
});

describe("ReverseString function", () => {
  test("basic string", () => {
    expect(reverseString("hallo")).toBe("ollah");
  });
  test("test string with whitespace", () => {
    expect(reverseString("deine Mutter")).toBe("rettuM enied");
  });
});

describe("Calculator", () => {
  test("add function test 1", () => {
    expect(calculator.add(2, 1)).toBe(3);
  });
  test("add function test 2", () => {
    expect(calculator.add(3, -7)).toBe(-4);
  });
  test("substract function test 1", () => {
    expect(calculator.substract(3, 1)).toBe(2);
  });
  test("substract function test 2", () => {
    expect(calculator.substract(-3, -12)).toBe(9);
  });
  test("multiply function test 1", () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  });
  test("multiply function test 2", () => {
    expect(calculator.multiply(12, -3)).toBe(-36);
  });
  test("divide function test 1", () => {
    expect(calculator.divide(12, 4)).toBe(3);
  });
  test("divide function test 2", () => {
    expect(calculator.divide(26, 5)).toBe(5.2);
  });
});

describe("Caesar Cipher", () => {
  test("test with 1 letter shift", () => {
    expect(caesarCipher("Hallo", 1)).toBe("Ibmmp");
  });
  test("test multiple letter shift", () => {
    expect(caesarCipher("Mutter", 3)).toBe("Pxwwhu");
  });
  test("shift over z or Z", () => {
    expect(caesarCipher("Zylophon", 28)).toBe("Banqrjqp");
  });
  test("whitespace test", () => {
    expect(caesarCipher("Ich bin Jan", 2)).toBe("Kej dkp Lcp");
  });
  test("test punctuation", () => {
    expect(caesarCipher(".-k90()", 4)).toBe(".-o90()");
  });
});

describe("analyze Array function", () => {
  test("test minimum return 1", () => {
    expect(analyzeArray([2, 3, 4, 1, 12, 6]).min).toBe(1);
  });
  test("test minimum return 2", () => {
    expect(analyzeArray([2, 3, 4, 1, -12, 6]).min).toBe(-12);
  });
  test("test average return 1", () => {
    expect(analyzeArray([1, 2, 3, 4]).average).toBe(2.5);
  });
  test("test average return 2", () => {
    expect(analyzeArray([2, 3, 3, 4]).average).toBe(3);
  });
  test("test max return 1", () => {
    expect(analyzeArray([-3, -2, -12, 99]).max).toBe(99);
  });
  test("test max return 2", () => {
    expect(analyzeArray([-3, -2, -12, -99]).max).toBe(-2);
  });
  test("test length return 1", () => {
    expect(analyzeArray([0, 1, 2, 3, 4, 5]).length).toBe(6);
  });
  test("test length return 2", () => {
    expect(analyzeArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toBe(11);
  });
  test("array empty test", () => {
    expect(analyzeArray([])).toStrictEqual({ average: 0, length: 0, max: 0, min: 0 });
  });
});
