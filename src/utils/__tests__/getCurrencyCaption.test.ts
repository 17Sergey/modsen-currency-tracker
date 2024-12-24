import { CURRENCY_CODES } from "@constants/homePage";

import { getCurrencyCaption } from "../getCurrencyCaption.ts";

describe("getCurrencyCaption", () => {
    it("should return the correct caption for USD", () => {
        expect(getCurrencyCaption(CURRENCY_CODES.USD)).toBe("Dollar USA");
    });

    it("should return the correct caption for AUD", () => {
        expect(getCurrencyCaption(CURRENCY_CODES.AUD)).toBe("Australian Dollar");
    });

    it("should return the correct caption for CAD", () => {
        expect(getCurrencyCaption(CURRENCY_CODES.CAD)).toBe("Canadian Dollar");
    });

    it("should return the correct caption for EUR", () => {
        expect(getCurrencyCaption(CURRENCY_CODES.EUR)).toBe("Euro");
    });

    it("should return the correct caption for CZK", () => {
        expect(getCurrencyCaption(CURRENCY_CODES.CZK)).toBe("Czech Krone");
    });

    it("should return the correct caption for GBP", () => {
        expect(getCurrencyCaption(CURRENCY_CODES.GBP)).toBe("GB Pound Sterling");
    });

    it("should return the correct caption for JPY", () => {
        expect(getCurrencyCaption(CURRENCY_CODES.JPY)).toBe("Japanese Yen");
    });

    it("should return the correct caption for PLN", () => {
        expect(getCurrencyCaption(CURRENCY_CODES.PLN)).toBe("Polish zloty");
    });

    it("should return the correct caption for RUB", () => {
        expect(getCurrencyCaption(CURRENCY_CODES.RUB)).toBe("Russian rouble");
    });

    it("should return a default message for an unknown currency code", () => {
        const unknownCurrencyCode = "XYZ";
        expect(getCurrencyCaption(unknownCurrencyCode)).toBe("Currency XYZ");
    });
});
