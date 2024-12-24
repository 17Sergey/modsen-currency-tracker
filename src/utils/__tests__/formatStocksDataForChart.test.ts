import { formatStocksDataForChart } from "../formatStocksDataForChart.ts";

describe("formatStocksDataForChart", () => {
    it("should format trade data correctly", () => {
        const inputData = [
            {
                time_period_start: "2024-12-01T00:00:00Z",
                time_period_end: "2024-12-01T01:00:00Z",
                time_open: "2024-12-01T00:00:00Z",
                time_close: "2024-12-01T01:00:00Z",
                price_open: 100,
                price_high: 110,
                price_low: 90,
                price_close: 105,
                volume_traded: 1000,
                trades_count: 50,
            },
            {
                time_period_start: "2024-12-02T00:00:00Z",
                time_period_end: "2024-12-02T01:00:00Z",
                time_open: "2024-12-02T00:00:00Z",
                time_close: "2024-12-02T01:00:00Z",
                price_open: 105,
                price_high: 115,
                price_low: 95,
                price_close: 110,
                volume_traded: 1500,
                trades_count: 60,
            },
        ];

        const expectedOutput = [
            {
                date: "2024-12-01",
                open: 100,
                high: 110,
                low: 90,
                close: 105,
            },
            {
                date: "2024-12-02",
                open: 105,
                high: 115,
                low: 95,
                close: 110,
            },
        ];

        const result = formatStocksDataForChart(inputData);
        expect(result).toEqual(expectedOutput);
    });

    it("should handle an empty array", () => {
        const inputData = [] as TradeData[];
        const expectedOutput = [] as FormattedStocksData;

        const result = formatStocksDataForChart(inputData);
        expect(result).toEqual(expectedOutput);
    });

    it("should handle single entry correctly", () => {
        const inputData = [
            {
                time_period_start: "2024-12-03T00:00:00Z",
                time_period_end: "2024-12-03T01:00:00Z",
                time_open: "2024-12-03T00:00:00Z",
                time_close: "2024-12-03T01:00:00Z",
                price_open: 200,
                price_high: 210,
                price_low: 190,
                price_close: 205,
                volume_traded: 500,
                trades_count: 30,
            },
        ];

        const expectedOutput = [
            {
                date: "2024-12-03",
                open: 200,
                high: 210,
                low: 190,
                close: 205,
            },
        ];

        const result = formatStocksDataForChart(inputData);
        expect(result).toEqual(expectedOutput);
    });
});
