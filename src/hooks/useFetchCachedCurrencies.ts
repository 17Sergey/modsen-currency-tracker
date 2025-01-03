import { useEffect, useState } from "react";

import { LOCAL_STORAGE_KEYS } from "@constants/constants.ts";
import { CURRENCIES_DATA_EXPIRY_TIME } from "@constants/homePage";
import { useLazyGetCurrenciesQuery } from "@store/api/appAPI";

export const useFetchCachedCurrencies = () => {
    const [fetchCurrencies, { error, isLoading }] = useLazyGetCurrenciesQuery();
    const [displayedCurrencies, setDisplayedCurrencies] = useState<CurrencyData[]>([]);
    const [lastUpdatedAt, setLastUpdatedAt] = useState<Date | null>(null);

    useEffect(() => {
        const storedCurrencies = localStorage.getItem(LOCAL_STORAGE_KEYS.CURRENCIES);
        const storedTimestamp = Number(localStorage.getItem(LOCAL_STORAGE_KEYS.CURRENCIES_TIME_STAMP));

        if (storedTimestamp) {
            setLastUpdatedAt(new Date(storedTimestamp));
        }

        const refetch = async () => {
            const result = await fetchCurrencies();
            if (result.isSuccess) {
                setDisplayedCurrencies(result.data?.data);
                const currentDate = Date.now();
                localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENCIES, JSON.stringify(result.data?.data));
                localStorage.setItem(LOCAL_STORAGE_KEYS.CURRENCIES_TIME_STAMP, currentDate.toString());

                setLastUpdatedAt(new Date(currentDate));
            }
        };

        if (!storedCurrencies || !storedTimestamp) {
            refetch();
            return;
        }

        const currentTime = Date.now();
        const timeDif = currentTime - storedTimestamp;

        if (timeDif > CURRENCIES_DATA_EXPIRY_TIME) {
            refetch();
            return;
        }

        setDisplayedCurrencies(JSON.parse(storedCurrencies));
    }, [fetchCurrencies]);

    return { displayedCurrencies, lastUpdatedAt, error, isLoading };
};
