export const isValidCurrencyAmount = (value: string) => {
    if (value === "") return false;

    const number = Number(value);
    return number >= 0 && number < 10000000000;
};
