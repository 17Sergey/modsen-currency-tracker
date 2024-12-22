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
