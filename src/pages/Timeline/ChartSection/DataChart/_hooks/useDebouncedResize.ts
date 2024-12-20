import { RefObject, useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";

export const useDebouncedResize = (chartRef: RefObject<HTMLDivElement>) => {
    const [chartWidth, setChartWidth] = useState(0);
    const debouncedSetChartWidth = useDebounceCallback((width: number) => {
        setChartWidth(width);
    }, 200);

    useEffect(() => {
        const handleResize = () => {
            if (chartRef.current) {
                debouncedSetChartWidth(chartRef.current.offsetWidth);
            }
        };
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [chartRef, debouncedSetChartWidth]);

    return { chartRef, chartWidth };
};
