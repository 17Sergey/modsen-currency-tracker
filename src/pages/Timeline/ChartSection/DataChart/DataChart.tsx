import { FC, memo } from "react";
import CandlestickChart from "react-candlestick-chart";
import { useTheme } from "styled-components";

import { CANDLE_STICK_CHART_ID } from "@constants/timelinePage.ts";

import { useDebouncedResize } from "./_hooks/useDebouncedResize.ts";
import { useDisableScrollInsideElement } from "./useDisableScrollInsideElement.ts";

type DataChartProps = {
    chartData: FormattedStocksData;
};

export const DataChart: FC<DataChartProps> = ({ chartData }) => {
    const theme = useTheme();

    const { scrollableRef } = useDisableScrollInsideElement();

    const { chartRef, chartWidth } = useDebouncedResize(scrollableRef);

    return (
        <div ref={chartRef}>
            {chartWidth > 0 && (
                <CandlestickChart
                    data={chartData}
                    id={CANDLE_STICK_CHART_ID}
                    width={chartWidth}
                    height={600}
                    decimal={2}
                    scrollZoom={{
                        enable: true,
                        max: 40,
                    }}
                    enableResetButton={false}
                    ColorPalette={{
                        background: "transparent",
                        grid: theme.colors.chartGrid,
                        greenCandle: theme.colors.chartUp,
                        redCandle: theme.colors.chartDown,
                    }}
                />
            )}
        </div>
    );
};

export const MemoizedDataChart = memo(DataChart);
