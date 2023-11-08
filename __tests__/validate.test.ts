import validate from "../src/lib/validate";

describe("Empty Input", () => {
  test("should return false", () => {
    expect(validate("")).toBe(false);
  });
});

describe("Non-String Input", () => {
  test("should return false", () => {
    let number = 2;
    expect(validate(number as any)).toBe(false);
  });
});

describe("Incorrect Format", () => {
  test("should return false", () => {
    const invalidCups = "ES0987543210987634ZF";
    expect(validate(invalidCups)).toBe(false);
  });
});

describe("Valid CUPS Code Formats", () => {
  test("Format 1 (Punto cliente o régimen especial con un solo equipo medida) should return true", () => {
    const validCups = "ES0987543210987654ZF";
    expect(validate(validCups)).toBe(true);
  });

  test("Format 2 (Punto frontera) should return true", () => {
    const validCups = "ES1234123456789012JY1F";
    expect(validate(validCups)).toBe(true);
  });

  test("Format 3 (Punto de medida principal de una frontera) should return true", () => {
    const validCups = "ES1234123456789012JY1P";
    expect(validate(validCups)).toBe(true);
  });

  test("Format 4 (Punto de medida comprobante) should return true", () => {
    const validCups = "ES9750210987654321CQ1C";
    expect(validate(validCups)).toBe(true);
  });

  test("Format 5 (Registrador, uno o varios puntos de medida) should return true", () => {
    const validCups = "ES0999110012345678EK1X";
    expect(validate(validCups)).toBe(true);
  });
});
