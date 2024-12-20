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

export const Z_INDEX_MANAGER = {
    TEN: "10",
    TWENTY: "20",
    MODAL_OVERLAY: "1000", // 1K
    MODAL_BOX: "10000", // 10K
    DROWDOWN: "100000", // 100K
    TOAST: "1000000", // 1M
};

export const REDUX_SLICES = {
    HOME_PAGE: "homePage",
};

export const DEFAULT_TOAST_LIFETIME = 3000;

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
    LTC: "LTC",
};

export const AVAILIABLE_STOCKS: AvailableStocks = {
    BTC: {
        name: "Bitcoin",
        code: "BTC",
    },
    LTC: {
        name: "Litecoin",
        code: "LTC",
    },
};

export const STOCKS_OPTIONS = Object.keys(AVAILIABLE_STOCKS);

export const DATE_NUMBERS = {
    DATE_PART_INDEX: 0,
    TIME_PART_INDEX: 1,
};

export const CONVERTER_INPUTS = {
    BASE_INPUT: "baseInput",
    TARGET_INPUT: "targetInput",
};

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

export const DEFAULT_COORDINATES = {
    longitude: 27.55077,
    latitude: 53.90187,
    zoom: 11.06,
};

export const DEFAULT_MAP_POPUP_OFFSET = [0, -30];

export const BANKS_DATA = {
    BELARUSBANKS: [
        {
            coordinates: {
                longitude: 27.478029,
                latitude: 53.909086,
            },
            currencies: ["USD", "AUD", "CAD"],
        },
        {
            coordinates: {
                longitude: 27.554006,
                latitude: 53.891739,
            },
            currencies: ["USD", "AUD", "CAD"],
        },
        {
            coordinates: {
                longitude: 27.58669,
                latitude: 53.91217,
            },
            currencies: ["USD", "EUR", "RUB"],
        },
    ],
    PRIORBANKS: [
        {
            coordinates: {
                longitude: 27.502503,
                latitude: 53.911629,
            },
            currencies: ["USD", "CZK", "EUR", "RUB"],
        },
        {
            coordinates: {
                longitude: 27.569196,
                latitude: 53.903101,
            },
            currencies: ["USD", "CZK", "EUR", "RUB"],
        },
        {
            coordinates: {
                longitude: 27.628903,
                latitude: 53.941202,
            },
            currencies: ["USD", "CZK", "PLN"],
        },
    ],
    ALPHABANKS: [
        {
            coordinates: {
                longitude: 27.55184,
                latitude: 53.89182,
            },
            currencies: ["USD", "EUR", "RUB"],
        },
        {
            coordinates: {
                longitude: 27.59421,
                latitude: 53.926574,
            },
            currencies: ["USD", "EUR", "GBP"],
        },
        {
            coordinates: {
                longitude: 27.478502,
                latitude: 53.907719,
            },
            currencies: ["USD", "EUR", "JPY"],
        },
    ],
};

export const BANKS = Object.keys(BANKS_DATA);
