import { formatCurrencyValue } from "../formatCurrencyValue.ts";

describe("formatCurrencyValue", () => {
    it("should format a positive number to two decimal places", () => {
        expect(formatCurrencyValue(123.456)).toBe(123.46);
    });

    it("should format a negative number to two decimal places", () => {
        expect(formatCurrencyValue(-123.456)).toBe(-123.46);
    });

    it("should format a whole number to two decimal places", () => {
        expect(formatCurrencyValue(100)).toBe(100.0);
    });

    it("should format a number with one decimal place", () => {
        expect(formatCurrencyValue(123.4)).toBe(123.4);
    });

    it("should format zero to two decimal places", () => {
        expect(formatCurrencyValue(0)).toBe(0.0);
    });

    it("should handle very small numbers correctly", () => {
        expect(formatCurrencyValue(0.004)).toBe(0.0);
    });
});
