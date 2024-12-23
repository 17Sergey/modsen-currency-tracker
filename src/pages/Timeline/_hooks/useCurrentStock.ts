import { useCallback, useState } from "react";

import { LOCAL_STORAGE_KEYS } from "@constants/constants";
import { AVAILIABLE_STOCKS } from "@constants/timelinePage";

export const useCurrentStock = () => {
    const storedStock = localStorage.getItem(LOCAL_STORAGE_KEYS.CHART_STOCK) || "";
    const parsedStock = JSON.parse(storedStock) as StockCodesType;

    const [currentStock, setCurrenctStock] = useState(AVAILIABLE_STOCKS[parsedStock]);

    const handleSelectStock = useCallback((option: string) => {
        const stockCode = option as StockCodesType;
        setCurrenctStock(AVAILIABLE_STOCKS[stockCode]);
    }, []);

    return { currentStock, handleSelectStock };
};
