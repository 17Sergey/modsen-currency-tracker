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

    // const [chartWidth, setChartWidth] = useState(1168);

    // const changeWidth = () => {
    //     // const newWidth = scrollableRef.current?.clientWidth || 1168;
    //     // console.log(window.innerWidth - 2 * 16);
    //     const width = window.innerWidth - 2 * 16;
    //     setChartWidth(width);
    // };

    // const debouncedUpdateWidth = useDebounceCallback(changeWidth, 500);

    // useEffect(() => {
    //     window.addEventListener("resize", debouncedUpdateWidth);
    //     return () => {
    //         window.removeEventListener("resize", debouncedUpdateWidth);
    //     };
    // }, []);

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
