import { BASE_CURRENCY, CURRENCIES_LIST, CURRENCY_API_KEY } from "@constants/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dateHelper } from "@utils/dateHelper.ts";
import { formatCurrencyValue } from "@utils/formatCurrencyValue";

export const currencyAPI = createApi({
    reducerPath: "currencyAPI",
    tagTypes: ["Currencies"],
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.freecurrencyapi.com/v1" }),
    endpoints: (build) => ({
        getCurrencies: build.query<CurrencyResponseTransformed, void>({
            query: () =>
                `/latest?apikey=${CURRENCY_API_KEY}&base_currency=${BASE_CURRENCY}&currencies=${CURRENCIES_LIST}`,
            transformResponse: (response: CurrencyResponse) => {
                const lastDay = dateHelper.generateLastDay();
                const formattedDate = dateHelper.formatDate(lastDay);

                const currenciesArray = Object.entries(response.data).map(([currency, value]) => {
                    const formattedValue = formatCurrencyValue(value);
                    return {
                        currency,
                        value: formattedValue,
                    };
                });

                return { meta: { last_updated_at: formattedDate }, data: currenciesArray };
            },
        }),
    }),
});
export const { useGetCurrenciesQuery } = currencyAPI;
