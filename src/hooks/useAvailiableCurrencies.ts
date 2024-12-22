import { useMemo } from "react";

import { CURRENCY_CODES } from "@constants/homePage.ts";

import { useFetchCachedCurrencies } from "./useFetchCachedCurrencies.ts";

const USD_ITEM = { currency: CURRENCY_CODES.USD, value: 1 };

export const useAvailiableCurrencies = () => {
    const { displayedCurrencies } = useFetchCachedCurrencies();

    const currenciesArray = useMemo(() => displayedCurrencies?.concat([USD_ITEM]) || [], [displayedCurrencies]);

    return currenciesArray;
};
