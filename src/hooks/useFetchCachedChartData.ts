import { useEffect, useState } from "react";

import { LOCAL_STORAGE_KEYS } from "@constants/constants.ts";
import { CHART_DATA_EXPIRY_TIME } from "@constants/timelinePage";
import { useLazyGetChartDataQuery } from "@store/api/appAPI";

export const useFetchCachedChartData = (stockCode: StockCodesType) => {
    const [fetchData, { error, isLoading, isFetching }] = useLazyGetChartDataQuery();
    const [displayedData, setDisplayedData] = useState<TradeData[] | null>(null);
    const [lastUpdatedAt, setLastUpdatedAt] = useState<Date | null>(null);

    useEffect(() => {
        const fetchAndCacheData = async () => {
            const result = await fetchData(stockCode);
            if (result.isSuccess) {
                const currentDate = Date.now();
                const prettyDate = new Date().toLocaleString();

                const existingCache = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CHART_DATA) || "{}");

                existingCache[stockCode] = {
                    code: stockCode,
                    timestamp: currentDate,
                    data: result.data?.data,
                };

                localStorage.setItem(LOCAL_STORAGE_KEYS.CHART_DATA, JSON.stringify(existingCache));
                localStorage.setItem(LOCAL_STORAGE_KEYS.CHART_DATE_PRETTY, prettyDate);
                setDisplayedData(result.data?.data);
                setLastUpdatedAt(new Date(currentDate));
            }
        };

        const cachedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEYS.CHART_DATA) || "{}");
        const storedData = cachedData[stockCode] || null;

        if (storedData) {
            const currentTime = Date.now();
            const timeDif = currentTime - storedData.timestamp;

            if (timeDif > CHART_DATA_EXPIRY_TIME) {
                fetchAndCacheData();
            } else {
                setDisplayedData(storedData.data);
                setLastUpdatedAt(new Date(storedData.timestamp));
            }
        } else {
            fetchAndCacheData();
        }
    }, [fetchData, stockCode]);

    return { displayedData, lastUpdatedAt, error, isLoading, isFetching };
};
