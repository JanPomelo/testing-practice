import { capitalize, reverseString } from "./practice";

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


