import { convertCurrency } from "../convertCurrency.ts";
import { formatCurrencyValue } from "../formatCurrencyValue.ts";

jest.mock("../formatCurrencyValue.ts");

describe("convertCurrency", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should convert currency correctly", () => {
        const baseCurrencyCount = 100;
        const baseCurrencyRate = 1;
        const resultCurrencyRate = 1.5;

        (formatCurrencyValue as jest.Mock).mockReturnValue(150.0);

        const result = convertCurrency(baseCurrencyCount, baseCurrencyRate, resultCurrencyRate);

        expect(result).toBe(150.0);
        expect(formatCurrencyValue).toHaveBeenCalledWith(150);
    });

    it("should return 0 if base currency count is 0", () => {
        const baseCurrencyCount = 0;
        const baseCurrencyRate = 1;
        const resultCurrencyRate = 1.5;

        (formatCurrencyValue as jest.Mock).mockReturnValue(0.0);

        const result = convertCurrency(baseCurrencyCount, baseCurrencyRate, resultCurrencyRate);

        expect(result).toBe(0.0);
        expect(formatCurrencyValue).toHaveBeenCalledWith(0);
    });

    it("should handle negative base currency count", () => {
        const baseCurrencyCount = -100;
        const baseCurrencyRate = 1;
        const resultCurrencyRate = 1.5;

        (formatCurrencyValue as jest.Mock).mockReturnValue(-150.0);

        const result = convertCurrency(baseCurrencyCount, baseCurrencyRate, resultCurrencyRate);

        expect(result).toBe(-150.0);
        expect(formatCurrencyValue).toHaveBeenCalledWith(-150);
    });

    it("should handle different currency rates", () => {
        const baseCurrencyCount = 200;
        const baseCurrencyRate = 2;
        const resultCurrencyRate = 4;

        (formatCurrencyValue as jest.Mock).mockReturnValue(400.0);

        const result = convertCurrency(baseCurrencyCount, baseCurrencyRate, resultCurrencyRate);

        expect(result).toBe(400.0);
        expect(formatCurrencyValue).toHaveBeenCalledWith(400);
    });
});
