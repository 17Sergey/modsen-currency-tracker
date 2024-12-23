export const isValidCurrencyAmount = (value: string) => {
    const number = Number(value);
    return number < 10000000000;
};
