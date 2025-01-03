import { isValidCurrencyAmount } from "../isValidCurrencyAmount.ts";

describe("isValidCurrencyAmount", () => {
    it("should return true for amounts less than 10 billion", () => {
        expect(isValidCurrencyAmount("9999999999")).toBe(true);
    });

    it("should return false for amounts equal to 10 billion", () => {
        expect(isValidCurrencyAmount("10000000000")).toBe(false);
    });

    it("should return false for amounts greater than 10 billion", () => {
        expect(isValidCurrencyAmount("10000000001")).toBe(false);
    });

    it("should return false for negative amounts", () => {
        expect(isValidCurrencyAmount("-1")).toBe(false);
    });

    it("should return true for zero", () => {
        expect(isValidCurrencyAmount("0")).toBe(true);
    });

    it("should return false for non-numeric strings", () => {
        expect(isValidCurrencyAmount("abc")).toBe(false);
    });

    it("should return false for empty strings", () => {
        expect(isValidCurrencyAmount("")).toBe(false);
    });

    it("should return false for strings that cannot be converted to numbers", () => {
        expect(isValidCurrencyAmount("10e12")).toBe(false);
    });

    it("should return true for valid numeric strings", () => {
        expect(isValidCurrencyAmount("9999999999.99")).toBe(true);
    });

    it("should return false for large decimal numbers", () => {
        expect(isValidCurrencyAmount("10000000000.01")).toBe(false);
    });
});
