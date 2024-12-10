import { formatCurrencyValue } from "./formatCurrencyValue.ts";

export const convertCurrency = (baseCurrencyCount: number, baseCurrency: number, resultCurrency: number) => {
    const result = baseCurrencyCount * (resultCurrency / baseCurrency);
    const formatted = formatCurrencyValue(result);
    return formatted;
};
