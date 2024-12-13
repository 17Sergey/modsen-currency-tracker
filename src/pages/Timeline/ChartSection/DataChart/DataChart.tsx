import { FC, useEffect } from "react";
import CandlestickChart from "react-candlestick-chart";
import { useTheme } from "styled-components";

import { CANDLE_STICK_CHART_ID } from "@constants/constants.ts";

import { StyledChart } from "./styled.ts";
import { useDisableScrollInsideElement } from "./useDisableScrollInsideElement.ts";

type DataChartProps = {
    chartData: FormattedStocksData;
};

export const DataChart: FC<DataChartProps> = ({ chartData }) => {
    const theme = useTheme();

    const chartGridColor = theme.colors.chartGrid;
    const greenCandleColor = theme.colors.chartUp;
    const redCandleColor = theme.colors.chartDown;

    useEffect(() => {
        const parent = document.getElementById(CANDLE_STICK_CHART_ID);
        if (parent) {
            parent.style.paddingLeft = "0";
            parent.style.paddingRight = "60px";
        }
    }, []);

    const { scrollableRef } = useDisableScrollInsideElement();

    return (
        <StyledChart ref={scrollableRef}>
            <CandlestickChart
                data={chartData}
                id={CANDLE_STICK_CHART_ID}
                width={1168}
                height={600}
                decimal={2}
                scrollZoom={{
                    enable: true,
                    max: 40,
                }}
                enableResetButton={false}
                ColorPalette={{
                    background: "transparent",
                    grid: chartGridColor,
                    greenCandle: greenCandleColor,
                    redCandle: redCandleColor,
                }}
            />
        </StyledChart>
    );
};
