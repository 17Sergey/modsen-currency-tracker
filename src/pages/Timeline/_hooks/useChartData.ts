import { useCallback, useEffect, useState } from "react";

import { useFetchCachedChartData } from "@hooks/useFetchCachedChartData";
import { formatStocksDataForChart } from "@utils/formatStocksDataForChart";

export const useChartData = (currentStock: StockType) => {
    const [chartData, setChartData] = useState<FormattedStocksData | null>(null);

    const {
        displayedData: fetchedData,
        isLoading,
        isFetching,
        lastUpdatedAt,
        error,
    } = useFetchCachedChartData(currentStock.code);

    useEffect(() => {
        if (fetchedData) {
            const formattedData = formatStocksDataForChart(fetchedData);
            setChartData(formattedData);
        }
    }, [fetchedData]);

    const handleUpdateData = useCallback((newData: FormattedStocksData) => {
        setChartData(newData);
    }, []);

    return { chartData, isLoading, isFetching, error, lastUpdatedAt, handleUpdateData };
};
