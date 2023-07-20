import { capitalize, reverseString, calculator } from "./practice";

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
  test('check with numbers in string', () => {
    expect(capitalize('5Hsu7')).toBe('5hsu7');
  })
});

describe("ReverseString function", () => {
  test('basic string', () => {
    expect(reverseString('hallo')).toBe('ollah');
  })
  test('test string with whitespace', () => {
    expect(reverseString('deine Mutter')).toBe('rettuM enied');
  })
})

describe('Calculator', () => {
  test('add function test 1', () => {
    expect(calculator.add(2, 1)).toBe(3);
  });
  test('add function test 2', () => {
    expect(calculator.add(3, -7)).toBe(-4);
  });
  test('substract function test 1', () => {
    expect(calculator.substract(3, 1)).toBe(2);
  });
  test('substract function test 2', () => {
    expect(calculator.substract(-3, -12)).toBe(9);
  })
  test('multiply function test 1', () => {
    expect(calculator.multiply(3, 2)).toBe(6);
  })
  test('multiply function test 2', () => {
    expect(calculator.multiply(12, -3)).toBe(-36);
  })
  test('divide function test 1', () => {
    expect(calculator.divide(12, 4)).toBe(3);
  })
  test('divide function test 2', () => {
    expect(calculator.divide(26, 5)).toBe(5.2);
  })
});
