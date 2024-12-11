export const PATHS = {
    HOME: "/",
    TIMELINE: "/timeline",
    BANK: "/bank",
    CONTACTS: "/contacts",
    CATCH_ALL: "*",
};

export const MENU_ITEMS: MenuItem[] = [
    { caption: "Home", location: PATHS.HOME },
    { caption: "Timeline", location: PATHS.TIMELINE },
    { caption: "Bank card", location: PATHS.BANK },
    { caption: "Contacto", location: PATHS.CONTACTS },
];

export const THEMES = {
    DARK: "dark",
    LIGHT: "light",
};

export const REDUX_SLICES = {
    HOME_PAGE: "homePage",
};

export const BASE_CURRENCY = "USD";

export const CURRENCIES_LIST = "EUR,AUD,JPY,CZK,GBP,PLN,RUB,CAD";

export const CURRENCY_API_KEY = process.env.CURRENCY_API_KEY || "";

export const CURRENCY_CODES = {
    USD: "USD",
    AUD: "AUD",
    CAD: "CAD",
    CZK: "CZK",
    EUR: "EUR",
    GBP: "GBP",
    JPY: "JPY",
    PLN: "PLN",
    RUB: "RUB",
};

export const STOCKS_CODES = {
    BTC: "BTC",
    IFIX: "IFIX",
};

export const DATE_NUMBERS = {
    DATE_PART_INDEX: 0,
    TIME_PART_INDEX: 1,
};

export const CONVERTER_INPUTS = {
    BASE_INPUT: "baseInput",
    TARGET_INPUT: "targetInput",
};

export const CANDLE_STICK_CHART_ID = "candleStickChart";
