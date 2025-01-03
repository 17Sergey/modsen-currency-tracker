export const formatStocksDataForChart = (data: TradeData[]) => {
    return data.map((item) => ({
        date: item.time_period_start.split("T")[0],
        open: item.price_open,
        high: item.price_high,
        low: item.price_low,
        close: item.price_close,
    })) as FormattedStocksData;
};
