import { useState } from "react";

import { AVAILIABLE_STOCKS } from "@constants/constants";

export const useCurrentStock = () => {
    const [currentStock, setCurrenctStock] = useState(AVAILIABLE_STOCKS.BTC);

    const handleSelectStock = (option: string) => {
        setCurrenctStock(AVAILIABLE_STOCKS[option]);
    };

    return { currentStock, handleSelectStock };
};
