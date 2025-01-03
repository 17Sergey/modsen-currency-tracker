import { PATHS } from "../../src/constants/constants.ts";
import { BASE_URL, DATA_CY, DEFAULT_PORT } from "../../src/constants/cypress.ts";

const chartData = [
    {
        time_period_start: "2024-12-01T00:00:00.0000000Z",
        time_period_end: "2024-12-02T00:00:00.0000000Z",
        time_open: "2024-12-01T00:00:39.6690000Z",
        time_close: "2024-12-01T23:59:49.8850000Z",
        price_open: 102.72,
        price_high: 122.03,
        price_low: 99.46,
        price_close: 119.66,
        volume_traded: 54583.99902724007,
        trades_count: 8018,
    },
    {
        time_period_start: "2024-12-02T00:00:00.0000000Z",
        time_period_end: "2024-12-03T00:00:00.0000000Z",
        time_open: "2024-12-02T00:00:21.5430000Z",
        time_close: "2024-12-02T23:59:52.1900000Z",
        price_open: 119.64,
        price_high: 139.55,
        price_low: 114.13,
        price_close: 132.93,
        volume_traded: 90493.50187020996,
        trades_count: 13953,
    },
    {
        time_period_start: "2024-12-03T00:00:00.0000000Z",
        time_period_end: "2024-12-04T00:00:00.0000000Z",
        time_open: "2024-12-03T00:00:05.9230000Z",
        time_close: "2024-12-03T23:59:33.4070000Z",
        price_open: 132.92,
        price_high: 135.19,
        price_low: 121.74,
        price_close: 131.03,
        volume_traded: 48644.944589079954,
        trades_count: 8851,
    },
    {
        time_period_start: "2024-12-04T00:00:00.0000000Z",
        time_period_end: "2024-12-05T00:00:00.0000000Z",
        time_open: "2024-12-04T00:00:19.8620000Z",
        time_close: "2024-12-04T23:59:55.4660000Z",
        price_open: 131.09,
        price_high: 135.63,
        price_low: 121.94,
        price_close: 133.94,
        volume_traded: 29036.68855006998,
        trades_count: 7176,
    },
    {
        time_period_start: "2024-12-05T00:00:00.0000000Z",
        time_period_end: "2024-12-06T00:00:00.0000000Z",
        time_open: "2024-12-05T00:00:42.6630000Z",
        time_close: "2024-12-05T23:59:29.3600000Z",
        price_open: 132.95,
        price_high: 147.23,
        price_low: 125.19,
        price_close: 136.11,
        volume_traded: 37558.850764259994,
        trades_count: 9070,
    },
    {
        time_period_start: "2024-12-06T00:00:00.0000000Z",
        time_period_end: "2024-12-07T00:00:00.0000000Z",
        time_open: "2024-12-06T00:00:43.5500000Z",
        time_close: "2024-12-06T23:58:19.5220000Z",
        price_open: 136.33,
        price_high: 139.33,
        price_low: 130.32,
        price_close: 136.24,
        volume_traded: 13121.388894050004,
        trades_count: 4342,
    },
    {
        time_period_start: "2024-12-07T00:00:00.0000000Z",
        time_period_end: "2024-12-08T00:00:00.0000000Z",
        time_open: "2024-12-07T00:00:41.3680000Z",
        time_close: "2024-12-07T23:59:46.5120000Z",
        price_open: 136.08,
        price_high: 138.7,
        price_low: 132.06,
        price_close: 133.91,
        volume_traded: 10312.230498210001,
        trades_count: 3692,
    },
    {
        time_period_start: "2024-12-08T00:00:00.0000000Z",
        time_period_end: "2024-12-09T00:00:00.0000000Z",
        time_open: "2024-12-08T00:00:08.2400000Z",
        time_close: "2024-12-08T23:58:57.8310000Z",
        price_open: 133.92,
        price_high: 135.9,
        price_low: 130.21,
        price_close: 135.02,
        volume_traded: 5388.968111599999,
        trades_count: 2394,
    },
    {
        time_period_start: "2024-12-09T00:00:00.0000000Z",
        time_period_end: "2024-12-10T00:00:00.0000000Z",
        time_open: "2024-12-09T00:00:50.4680000Z",
        time_close: "2024-12-09T23:59:46.9040000Z",
        price_open: 135,
        price_high: 135,
        price_low: 101.47,
        price_close: 110.73,
        volume_traded: 42147.20261615997,
        trades_count: 7743,
    },
    {
        time_period_start: "2024-12-10T00:00:00.0000000Z",
        time_period_end: "2024-12-11T00:00:00.0000000Z",
        time_open: "2024-12-10T00:00:12.9900000Z",
        time_close: "2024-12-10T23:57:03.6510000Z",
        price_open: 110.37,
        price_high: 114.79,
        price_low: 101.32,
        price_close: 110.04,
        volume_traded: 45060.44148488004,
        trades_count: 9797,
    },
    {
        time_period_start: "2024-12-11T00:00:00.0000000Z",
        time_period_end: "2024-12-12T00:00:00.0000000Z",
        time_open: "2024-12-11T00:00:05.9990000Z",
        time_close: "2024-12-11T23:59:50.1520000Z",
        price_open: 109.88,
        price_high: 118.74,
        price_low: 106.15,
        price_close: 117.35,
        volume_traded: 19380.109774550016,
        trades_count: 4649,
    },
    {
        time_period_start: "2024-12-12T00:00:00.0000000Z",
        time_period_end: "2024-12-13T00:00:00.0000000Z",
        time_open: "2024-12-12T00:00:20.9270000Z",
        time_close: "2024-12-12T23:58:20.5260000Z",
        price_open: 117.45,
        price_high: 125.06,
        price_low: 116.59,
        price_close: 119.33,
        volume_traded: 19792.05224264999,
        trades_count: 4891,
    },
    {
        time_period_start: "2024-12-13T00:00:00.0000000Z",
        time_period_end: "2024-12-14T00:00:00.0000000Z",
        time_open: "2024-12-13T00:01:00.6460000Z",
        time_close: "2024-12-13T23:57:07.0920000Z",
        price_open: 119.4,
        price_high: 125.31,
        price_low: 117.13,
        price_close: 124.28,
        volume_traded: 11972.168599229999,
        trades_count: 4147,
    },
    {
        time_period_start: "2024-12-14T00:00:00.0000000Z",
        time_period_end: "2024-12-15T00:00:00.0000000Z",
        time_open: "2024-12-14T00:00:09.1330000Z",
        time_close: "2024-12-14T23:59:19.2190000Z",
        price_open: 124.43,
        price_high: 125.34,
        price_low: 115.48,
        price_close: 118.24,
        volume_traded: 7910.637284270001,
        trades_count: 2620,
    },
    {
        time_period_start: "2024-12-15T00:00:00.0000000Z",
        time_period_end: "2024-12-16T00:00:00.0000000Z",
        time_open: "2024-12-15T00:00:27.5110000Z",
        time_close: "2024-12-15T23:58:47.8130000Z",
        price_open: 118.09,
        price_high: 122.06,
        price_low: 114.35,
        price_close: 121.01,
        volume_traded: 7766.554007550001,
        trades_count: 2429,
    },
    {
        time_period_start: "2024-12-16T00:00:00.0000000Z",
        time_period_end: "2024-12-17T00:00:00.0000000Z",
        time_open: "2024-12-16T00:00:16.1200000Z",
        time_close: "2024-12-16T23:59:27.0540000Z",
        price_open: 121.37,
        price_high: 123.84,
        price_low: 115.43,
        price_close: 118.07,
        volume_traded: 15118.868585599994,
        trades_count: 4467,
    },
    {
        time_period_start: "2024-12-17T00:00:00.0000000Z",
        time_period_end: "2024-12-18T00:00:00.0000000Z",
        time_open: "2024-12-17T00:00:06.3990000Z",
        time_close: "2024-12-17T23:59:57.3560000Z",
        price_open: 118.07,
        price_high: 131.33,
        price_low: 114.73,
        price_close: 125.54,
        volume_traded: 22122.339939140038,
        trades_count: 4595,
    },
    {
        time_period_start: "2024-12-18T00:00:00.0000000Z",
        time_period_end: "2024-12-19T00:00:00.0000000Z",
        time_open: "2024-12-18T00:00:06.5840000Z",
        time_close: "2024-12-18T23:59:57.4550000Z",
        price_open: 125.65,
        price_high: 129.03,
        price_low: 106.62,
        price_close: 108.28,
        volume_traded: 25369.106399059983,
        trades_count: 5364,
    },
    {
        time_period_start: "2024-12-19T00:00:00.0000000Z",
        time_period_end: "2024-12-20T00:00:00.0000000Z",
        time_open: "2024-12-19T00:00:21.6680000Z",
        time_close: "2024-12-19T23:59:03.5180000Z",
        price_open: 108.4,
        price_high: 111.68,
        price_low: 94.84,
        price_close: 99.41,
        volume_traded: 19207.143193890006,
        trades_count: 5054,
    },
    {
        time_period_start: "2024-12-20T00:00:00.0000000Z",
        time_period_end: "2024-12-21T00:00:00.0000000Z",
        time_open: "2024-12-20T00:00:04.1280000Z",
        time_close: "2024-12-20T23:59:57.5310000Z",
        price_open: 99.29,
        price_high: 103.11,
        price_low: 86.7,
        price_close: 101.35,
        volume_traded: 30337.98302429003,
        trades_count: 6734,
    },
    {
        time_period_start: "2024-12-21T00:00:00.0000000Z",
        time_period_end: "2024-12-22T00:00:00.0000000Z",
        time_open: "2024-12-21T00:00:03.5060000Z",
        time_close: "2024-12-21T23:59:54.0900000Z",
        price_open: 101.33,
        price_high: 105.87,
        price_low: 97.91,
        price_close: 101.5,
        volume_traded: 9912.663674129997,
        trades_count: 2995,
    },
    {
        time_period_start: "2024-12-22T00:00:00.0000000Z",
        time_period_end: "2024-12-23T00:00:00.0000000Z",
        time_open: "2024-12-22T00:00:30.9580000Z",
        time_close: "2024-12-22T23:59:23.9160000Z",
        price_open: 101.48,
        price_high: 103.82,
        price_low: 96.79,
        price_close: 99.72,
        volume_traded: 7645.508737649995,
        trades_count: 2210,
    },
    {
        time_period_start: "2024-12-23T00:00:00.0000000Z",
        time_period_end: "2024-12-24T00:00:00.0000000Z",
        time_open: "2024-12-23T00:02:08.7030000Z",
        time_close: "2024-12-23T23:59:59.6610000Z",
        price_open: 99.72,
        price_high: 107.49,
        price_low: 97.94,
        price_close: 106.64,
        volume_traded: 12282.368802510002,
        trades_count: 3358,
    },
    {
        time_period_start: "2024-12-24T00:00:00.0000000Z",
        time_period_end: "2024-12-25T00:00:00.0000000Z",
        time_open: "2024-12-24T00:00:38.6440000Z",
        time_close: "2024-12-24T23:59:45.9200000Z",
        price_open: 106.54,
        price_high: 110.66,
        price_low: 103.89,
        price_close: 108.28,
        volume_traded: 5714.296987579997,
        trades_count: 2267,
    },
    {
        time_period_start: "2024-12-25T00:00:00.0000000Z",
        time_period_end: "2024-12-26T00:00:00.0000000Z",
        time_open: "2024-12-25T00:00:01.9470000Z",
        time_close: "2024-12-25T23:59:57.8610000Z",
        price_open: 108.24,
        price_high: 110.59,
        price_low: 106.94,
        price_close: 109.76,
        volume_traded: 4324.5835730399995,
        trades_count: 1775,
    },
    {
        time_period_start: "2024-12-26T00:00:00.0000000Z",
        time_period_end: "2024-12-27T00:00:00.0000000Z",
        time_open: "2024-12-26T00:01:39.9930000Z",
        time_close: "2024-12-26T23:59:58.2020000Z",
        price_open: 109.69,
        price_high: 110.1,
        price_low: 100.97,
        price_close: 102.13,
        volume_traded: 6259.272078839999,
        trades_count: 2217,
    },
    {
        time_period_start: "2024-12-27T00:00:00.0000000Z",
        time_period_end: "2024-12-28T00:00:00.0000000Z",
        time_open: "2024-12-27T00:00:39.2350000Z",
        time_close: "2024-12-27T23:59:56.4920000Z",
        price_open: 102.18,
        price_high: 106.36,
        price_low: 99.6,
        price_close: 100.44,
        volume_traded: 7110.162524970002,
        trades_count: 2326,
    },
    {
        time_period_start: "2024-12-28T00:00:00.0000000Z",
        time_period_end: "2024-12-29T00:00:00.0000000Z",
        time_open: "2024-12-28T00:00:36.7820000Z",
        time_close: "2024-12-28T23:57:38.6310000Z",
        price_open: 100.53,
        price_high: 101.58,
        price_low: 98.58,
        price_close: 100.6,
        volume_traded: 3827.1024653200006,
        trades_count: 1939,
    },
    {
        time_period_start: "2024-12-29T00:00:00.0000000Z",
        time_period_end: "2024-12-30T00:00:00.0000000Z",
        time_open: "2024-12-29T00:00:16.5140000Z",
        time_close: "2024-12-29T23:59:55.7940000Z",
        price_open: 100.58,
        price_high: 101.44,
        price_low: 96.73,
        price_close: 98.38,
        volume_traded: 2775.366134589999,
        trades_count: 1550,
    },
    {
        time_period_start: "2024-12-30T00:00:00.0000000Z",
        time_period_end: "2024-12-31T00:00:00.0000000Z",
        time_open: "2024-12-30T00:01:22.2450000Z",
        time_close: "2024-12-30T23:58:49.4420000Z",
        price_open: 98.05,
        price_high: 102.82,
        price_low: 97.28,
        price_close: 99.31,
        volume_traded: 5608.497353230001,
        trades_count: 2412,
    },
    {
        time_period_start: "2024-12-31T00:00:00.0000000Z",
        time_period_end: "2025-01-01T00:00:00.0000000Z",
        time_open: "2024-12-31T00:01:14.9030000Z",
        time_close: "2024-12-31T23:58:11.7630000Z",
        price_open: 99.09,
        price_high: 104.61,
        price_low: 97.65,
        price_close: 103.07,
        volume_traded: 7625.9200501199975,
        trades_count: 2751,
    },
    {
        time_period_start: "2025-01-01T00:00:00.0000000Z",
        time_period_end: "2025-01-02T00:00:00.0000000Z",
        time_open: "2025-01-01T00:02:09.4870000Z",
        time_close: "2025-01-01T23:58:12.6440000Z",
        price_open: 103.35,
        price_high: 107.83,
        price_low: 101.91,
        price_close: 105.03,
        volume_traded: 9043.142024989997,
        trades_count: 2461,
    },
    {
        time_period_start: "2025-01-02T00:00:00.0000000Z",
        time_period_end: "2025-01-03T00:00:00.0000000Z",
        time_open: "2025-01-02T00:00:02.9240000Z",
        time_close: "2025-01-02T11:49:46.3400000Z",
        price_open: 104.98,
        price_high: 107.87,
        price_low: 104.88,
        price_close: 106.51,
        volume_traded: 2358.7215054000003,
        trades_count: 999,
    },
];

describe("Timeline Tests", () => {
    it("should not display chart section when api request error", () => {
        cy.clearLocalStorage();

        cy.intercept("GET", `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/*`, {
            statusCode: 401,
        }).as("getData");

        cy.visit(`${BASE_URL}:${DEFAULT_PORT}${PATHS.TIMELINE}`);

        cy.get(`[data-cy="${DATA_CY.LOADER}"]`).should("be.visible");

        cy.wait("@getData");

        cy.get(`[data-cy="${DATA_CY.CHART_SECTION}"]`).should("not.exist");
    });

    it("should display chart section and stock card", () => {
        cy.clearLocalStorage();

        cy.intercept("GET", `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/*`, {
            statusCode: 200,
            body: chartData,
        }).as("getData");

        cy.visit(`${BASE_URL}:${DEFAULT_PORT}${PATHS.TIMELINE}`);

        cy.get(`[data-cy="${DATA_CY.LOADER}"]`).should("be.visible");

        cy.wait("@getData");

        cy.get(`[data-cy="${DATA_CY.CHART_SECTION}"]`).should("exist");

        cy.get(`[data-cy="${DATA_CY.STOCK_CARD}"]`).should("contain", "BTC");

        cy.get(`[data-cy="${DATA_CY.STOCK_SELECT}"]`).click();
        cy.get(`[data-cy="${DATA_CY.STOCK_SELECT}"]`).children("ul[role='listbox']").last().click();

        cy.get(`[data-cy="${DATA_CY.STOCK_CARD}"]`).should("contain", "LTC");
    });

    it("should disable buttons with logic and change data if day changes", () => {
        cy.clearLocalStorage();

        cy.intercept("GET", `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/*`, {
            statusCode: 200,
            body: chartData,
        }).as("getData");

        cy.visit(`${BASE_URL}:${DEFAULT_PORT}${PATHS.TIMELINE}`);

        cy.wait("@getData");

        cy.get(`[data-cy="${DATA_CY.STOCK_SELECT}"]`).click();
        cy.get(`[data-cy="${DATA_CY.STOCK_SELECT}"]`).children("ul[role='listbox']").last().click();

        cy.get(`[data-cy="${DATA_CY.STOCK_CARD}"]`).should("contain", "LTC");

        cy.get(`[data-cy="${DATA_CY.EDIT_CHART_BTN}"]`).click();
        cy.get(`[data-cy="${DATA_CY.EDIT_CHART_MODAL}"]`).should("be.visible");

        cy.get(`[data-cy="${DATA_CY.UPDATE_CHART_BTN}"]`).should("be.disabled");

        cy.get(`[data-cy="${DATA_CY.PREV_DAY_BTN}"]`).click();
        cy.get(`[data-cy="${DATA_CY.PREV_DAY_BTN}"]`).should("be.disabled");

        cy.get(`[data-cy="${DATA_CY.NEXT_DAY_BTN}"]`).click();
        cy.get(`[data-cy="${DATA_CY.PREV_DAY_BTN}"]`).should("not.be.disabled");

        cy.get(`[data-cy="${DATA_CY.OPEN_INPUT}"]`)
            .invoke("val")
            .then((baseValue) => {
                cy.get(`[data-cy="${DATA_CY.NEXT_DAY_BTN}"]`).click();
                cy.get(`[data-cy="${DATA_CY.OPEN_INPUT}"]`).should("not.have.value", baseValue);

                cy.get(`[data-cy="${DATA_CY.PREV_DAY_BTN}"]`).click();
                cy.get(`[data-cy="${DATA_CY.OPEN_INPUT}"]`).should("have.value", baseValue);
            });

        cy.get(`[data-cy="${DATA_CY.SELECT_CHART_DAY}"]`).click();
        cy.get(`[role='listbox']`)
            .find("li")
            .first()
            .invoke("text")
            .then((firstOptionText) => {
                cy.get(`[role='listbox']`).find("li").last().click();
                cy.get(`[data-cy="${DATA_CY.SELECT_CHART_DAY}"]`).should("not.contain", firstOptionText);
            });

        cy.get(`[data-cy="${DATA_CY.CLOSE_MODAL}"]`).click();
        cy.get(`[data-cy="${DATA_CY.EDIT_CHART_MODAL}"]`).should("not.exist");
    });

    it("should open and close modal", () => {
        cy.clearLocalStorage();

        cy.intercept("GET", `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/*`, {
            statusCode: 200,
            body: chartData,
        }).as("getData");

        cy.visit(`${BASE_URL}:${DEFAULT_PORT}${PATHS.TIMELINE}`);

        cy.wait("@getData");

        cy.get(`[data-cy="${DATA_CY.EDIT_CHART_BTN}"]`).click();
        cy.get(`[data-cy="${DATA_CY.EDIT_CHART_MODAL}"]`).should("be.visible");

        cy.get(`[data-cy="${DATA_CY.CLOSE_MODAL}"]`).click();
        cy.get(`[data-cy="${DATA_CY.EDIT_CHART_MODAL}"]`).should("not.exist");
    });

    it("should hide toast for updated after 2 seconds", () => {
        cy.clearLocalStorage();

        cy.intercept("GET", `https://rest.coinapi.io/v1/ohlcv/BITSTAMP_SPOT_BTC_USD/*`, {
            statusCode: 200,
            body: chartData,
        }).as("getData");

        cy.visit(`${BASE_URL}:${DEFAULT_PORT}${PATHS.TIMELINE}`);

        cy.get(`[data-cy="${DATA_CY.LOADER}"]`).should("be.visible");

        cy.wait("@getData");

        cy.get(`[data-cy="${DATA_CY.CHART_SECTION}"]`).should("exist");

        cy.get(`[data-cy="${DATA_CY.STOCK_CARD}"]`).should("contain", "BTC");

        cy.get(`[data-cy="${DATA_CY.STOCK_SELECT}"]`).click();
        cy.get(`[data-cy="${DATA_CY.STOCK_SELECT}"]`).children("ul[role='listbox']").last().click();

        cy.get(`[data-cy="${DATA_CY.STOCK_CARD}"]`).should("contain", "LTC");

        cy.get(`[data-cy="${DATA_CY.EDIT_CHART_BTN}"]`).click();
        cy.get(`[data-cy="${DATA_CY.EDIT_CHART_MODAL}"]`).should("be.visible");

        cy.get(`[data-cy="${DATA_CY.OPEN_INPUT}"]`).clear().type("111");
        cy.get(`[data-cy="${DATA_CY.UPDATE_CHART_BTN}"]`).should("not.be.disabled");

        cy.get(`[data-cy="${DATA_CY.UPDATE_CHART_BTN}"]`).click();
        cy.get(`[data-cy="${DATA_CY.UPDATE_CHART_TOAST}"]`).should("be.visible");

        cy.wait(2000);
        cy.get(`[data-cy="${DATA_CY.UPDATE_CHART_TOAST}"]`).should("not.be.visible");

        cy.get(`[data-cy="${DATA_CY.CLOSE_MODAL}"]`).click();
        cy.get(`[data-cy="${DATA_CY.EDIT_CHART_MODAL}"]`).should("not.exist");
    });
});
