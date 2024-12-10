import { CURRENCY_CODES } from "@constants/constants.ts";
import { useGetCurrenciesQuery } from "@store/api/currencyAPI";

const USD_ITEM = { currency: CURRENCY_CODES.USD, value: 1 };

export const useCurrencyData = () => {
    const { data: currencies } = useGetCurrenciesQuery();
    const currenciesArray = currencies?.data.concat([USD_ITEM]) || [];
    return currenciesArray;
};
