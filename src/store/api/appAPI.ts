import { chartAPI } from "@api/chartAPI";
import { currencyAPI } from "@api/currencyAPI";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { dateHelper } from "@utils/dateHelper.ts";
import { formatCurrencyValue } from "@utils/formatCurrencyValue";

export const appAPI = createApi({
    reducerPath: "currencyAPI",
    tagTypes: ["Currencies"],
    baseQuery: fetchBaseQuery({ baseUrl: "" }),
    endpoints: (build) => ({
        getCurrencies: build.query<CurrencyResponseTransformed, void>({
            query: () => currencyAPI.buildCurrenciesEndpoint(),
            transformResponse: (response: CurrencyResponse) => {
                const lastDay = dateHelper.generateFormattedLastDay();

                const currenciesArray = Object.entries(response.data).map(([currency, value]) => {
                    const formattedValue = formatCurrencyValue(value);
                    return {
                        currency,
                        value: formattedValue,
                    };
                });

                return { meta: { last_updated_at: lastDay }, data: currenciesArray };
            },
        }),
        getChartData: build.query<ChartDataResponseTransformed, StockCodesType>({
            query: (stockCode: StockCodesType) => chartAPI.buildHistoryEndpoint(stockCode),
            transformResponse: (response: ChartDataResponse) => {
                const lastDay = dateHelper.generateFormattedLastDay();

                return {
                    meta: { last_updated_at: lastDay },
                    data: response,
                } as ChartDataResponseTransformed;
            },
        }),
    }),
});

export const { useLazyGetCurrenciesQuery, useLazyGetChartDataQuery } = appAPI;
