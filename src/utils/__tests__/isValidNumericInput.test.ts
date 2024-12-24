import { isValidNumericInput } from "../isValidNumericInput.ts";

describe("isValidNumericInput", () => {
    it("should return true for valid whole numbers", () => {
        expect(isValidNumericInput("123")).toBe(true);
    });

    it("should return true for valid decimal numbers", () => {
        expect(isValidNumericInput("123.45")).toBe(true);
    });

    it("should return true for valid decimal numbers with leading zero", () => {
        expect(isValidNumericInput("0.5")).toBe(true);
    });

    it("should return true for valid whole numbers with trailing decimal point", () => {
        expect(isValidNumericInput("123.")).toBe(true);
    });

    it("should return false for invalid decimal numbers with multiple decimal points", () => {
        expect(isValidNumericInput("123..")).toBe(false);
    });

    it("should return false for invalid decimal numbers with non-numeric characters", () => {
        expect(isValidNumericInput("123.(")).toBe(false);
    });

    it("should return false for invalid decimal numbers without leading digit", () => {
        expect(isValidNumericInput(".5")).toBe(false);
    });

    it("should return false for non-numeric strings", () => {
        expect(isValidNumericInput("abc")).toBe(false);
    });

    it("should return true for empty strings", () => {
        expect(isValidNumericInput("")).toBe(true);
    });

    it("should return true for valid small decimal numbers", () => {
        expect(isValidNumericInput("0.01")).toBe(true);
    });

    it("should return false for negative numbers", () => {
        expect(isValidNumericInput("-123.45")).toBe(false);
    });
});
