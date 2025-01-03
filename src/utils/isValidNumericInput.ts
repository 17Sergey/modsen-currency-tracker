export const isValidNumericInput = (value: string) => {
    if (value === "") return true;

    const regex = /^\d+(\.\d*)?$/;
    return regex.test(value);
};
