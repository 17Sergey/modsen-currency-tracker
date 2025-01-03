import { Component, createRef } from "react";
import CandlestickChart from "react-candlestick-chart";
import { DefaultTheme } from "styled-components";

import { CANDLE_STICK_CHART_ID } from "@constants/timelinePage.ts";

export type DataChartProps = {
    chartData: FormattedStocksData;
    theme: DefaultTheme;
};

type DataChartState = {
    chartWidth: number;
};

export class DataChart extends Component<DataChartProps, DataChartState> {
    private scrollableRef = createRef<HTMLDivElement>();

    constructor(props: DataChartProps) {
        super(props);
        this.state = {
            chartWidth: 0,
        };
    }

    componentDidMount() {
        this.handleResize();
        window.addEventListener("resize", this.handleResize);
        this.initializeScroll();
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize);
        this.disableScroll();
    }

    handleResize = () => {
        if (this.scrollableRef.current) {
            const width = this.scrollableRef.current.offsetWidth;
            this.setChartWidth(width);
        }
    };

    setChartWidth = (width: number) => {
        this.setState({ chartWidth: width });
    };

    initializeScroll = () => {
        if (this.scrollableRef.current) {
            this.scrollableRef.current.addEventListener("wheel", this.handleScroll, { passive: false });
        }
    };

    disableScroll = () => {
        if (this.scrollableRef.current) {
            this.scrollableRef.current.removeEventListener("wheel", this.handleScroll);
        }
    };

    handleScroll = (event: WheelEvent) => {
        if (this.scrollableRef.current) {
            event.preventDefault();
            this.scrollableRef.current.scrollTop += event.deltaY;
        }
    };

    render() {
        const { chartData, theme } = this.props;
        const { chartWidth } = this.state;

        return (
            <div ref={this.scrollableRef}>
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
    }
}
