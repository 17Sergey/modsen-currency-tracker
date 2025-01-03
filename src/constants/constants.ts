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

export const LOCAL_STORAGE_KEYS = {
    CURRENCIES: "currencies",
    CURRENCIES_TIME_STAMP: "currenciesTimestamp",
    CHART_DATA: "chartData",
    CHART_TIME_STAMP: "chartTimestamp",
    CHART_DATE_PRETTY: "chartDatePretty",
    CHART_STOCK: "chartStock",
};
