import { getMonthTimeRange } from "../getMonthTimeRange.ts";

describe("getMonthTimeRange", () => {
    it("should return correct start and end time for a given date", () => {
        const testDate = new Date(Date.UTC(2024, 11, 23));
        const result = getMonthTimeRange(testDate);

        expect(result).toEqual(["2024-11-22T00:00:00", "2024-12-22T23:59:59"]);
    });

    it("should handle the end of the month correctly", () => {
        const testDate = new Date(Date.UTC(2024, 0, 1));
        const result = getMonthTimeRange(testDate);

        expect(result).toEqual(["2023-12-01T00:00:00", "2023-12-31T23:59:59"]);
    });

    it("should handle dates that are the last day of the month", () => {
        const testDate = new Date(Date.UTC(2024, 1, 29));
        const result = getMonthTimeRange(testDate);

        expect(result).toEqual(["2024-01-28T00:00:00", "2024-02-28T23:59:59"]);
    });

    it("should handle the transition from January to December correctly", () => {
        const testDate = new Date(Date.UTC(2024, 0, 31));
        const result = getMonthTimeRange(testDate);

        expect(result).toEqual(["2023-12-30T00:00:00", "2024-01-30T23:59:59"]);
    });

    it("should handle dates in the middle of the month", () => {
        const testDate = new Date(Date.UTC(2024, 11, 15));
        const result = getMonthTimeRange(testDate);

        expect(result).toEqual(["2024-11-14T00:00:00", "2024-12-14T23:59:59"]);
    });
});
