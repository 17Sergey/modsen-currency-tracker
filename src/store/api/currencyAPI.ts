import { BASE_CURRENCY, CURRENCIES_LIST, CURRENCY_API_KEY } from "@constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// TODO: Add Tags
export const currencyAPI = createApi({
    reducerPath: "currencyAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.freecurrencyapi.com/v1" }),
    endpoints: (build) => ({
        getCurrencies: build.query<CurrencyData[], void>({
            query: () =>
                `/latest?apikey=${CURRENCY_API_KEY}&base_currency=${BASE_CURRENCY}&currencies=${CURRENCIES_LIST}`,
            transformResponse: (response: CurrencyResponse) => {
                return Object.entries(response.data).map(([currency, value]) => ({
                    currency,
                    value,
                }));
            },
        }),
    }),
});

export const { useGetCurrenciesQuery } = currencyAPI;
