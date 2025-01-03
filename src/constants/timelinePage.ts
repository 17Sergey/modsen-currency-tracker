export const DEFAULT_TOAST_LIFETIME = 3000;

export const CHART_DATA_EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24 hours

type StockCodesObjectType = {
    [key in StockCodesType]: StockCodesType;
};

export const STOCKS_CODES: StockCodesObjectType = {
    BTC: "BTC",
    LTC: "LTC",
};

export const AVAILIABLE_STOCKS: AvailableStockType = {
    BTC: {
        name: "Bitcoin",
        code: STOCKS_CODES.BTC,
    },
    LTC: {
        name: "Litecoin",
        code: STOCKS_CODES.LTC,
    },
};

export const STOCKS_OPTIONS = Object.keys(AVAILIABLE_STOCKS);

export const CANDLE_STICK_CHART_ID = "candleStickChart";

export const EDIT_DAY_INPUTS = {
    DATE: "date",
    OPEN: "open",
    HIGH: "high",
    LOW: "low",
    CLOSE: "close",
};

export const EDIT_DAY_BUTTONS = {
    PREVIOUS: "PREVIOUS",
    NEXT: "NEXT",
};
