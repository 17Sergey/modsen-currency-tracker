import { CURRENCY_CODES } from "@constants/constants";

export const getCurrencyCaption = (currencyCode: string) => {
    switch (currencyCode) {
        case CURRENCY_CODES.USD:
            return "Dollar USA";
        case CURRENCY_CODES.AUD:
            return "Australian Dollar";
        case CURRENCY_CODES.CAD:
            return "Canadian Dollar";
        case CURRENCY_CODES.EUR:
            return "Euro";
        case CURRENCY_CODES.CZK:
            return "Czech Krone";
        case CURRENCY_CODES.GBP:
            return "GB Pound Sterling";
        case CURRENCY_CODES.JPY:
            return "Japanese Yen";
        case CURRENCY_CODES.PLN:
            return "Polish zloty";
        case CURRENCY_CODES.RUB:
            return "Russian rouble";
        default:
            return `Currency ${currencyCode}`;
    }
};
