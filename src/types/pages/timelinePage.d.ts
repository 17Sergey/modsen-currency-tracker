type TradeData = {
    time_period_start: string;
    time_period_end: string;
    time_open: string;
    time_close: string;
    price_open: number;
    price_high: number;
    price_low: number;
    price_close: number;
    volume_traded: number;
    trades_count: number;
};

type ChartDataResponseTransformed = {
    meta: {
        last_updated_at: string;
    };
    data: TradeData[];
};

type ChartDataResponse = TradeData[];

type FormattedStock = {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
};

type FormattedStocksData = FormattedStock[];

type StockCodesType = "BTC" | "LTC";

type StockType = {
    name: string;
    code: StockCodesType;
};

type AvailableStockType = {
    [key in StockCodesType]: StockType;
};
