import { BASE_CURRENCY, CURRENCIES_LIST } from "@constants/homePage";

export const currencyAPI = {
    constants: {
        BASE_URL: "https://api.freecurrencyapi.com/v1",
        QUERY_PARAMS: {
            API_KEY: "apikey",
            BASE_CURRENCY: "base_currency",
            CURRENCIES: "currencies",
        },
        API_KEY: process.env.CURRENCY_API_KEY || "",
        BASE_CURRENCY,
        CURRENCIES: CURRENCIES_LIST,
    },
    buildCurrenciesEndpoint() {
        const baseUrl = this.constants.BASE_URL;

        const apiKeyQuery = this.constants.QUERY_PARAMS.API_KEY;
        const apiKey = this.constants.API_KEY;

        const baseCurrencyQuery = this.constants.QUERY_PARAMS.BASE_CURRENCY;
        const baseCurrency = this.constants.BASE_CURRENCY;

        const currenciesQuery = this.constants.QUERY_PARAMS.CURRENCIES;
        const currencies = this.constants.CURRENCIES;

        return `${baseUrl}/latest?${apiKeyQuery}=${apiKey}&${baseCurrencyQuery}=${baseCurrency}&${currenciesQuery}=${currencies}`;
    },
};
