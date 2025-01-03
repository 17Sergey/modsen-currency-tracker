import { dateHelper } from "../dateHelper.ts";

describe("dateHelper", () => {
    describe("formatDate", () => {
        it("should format date correctly", () => {
            const date = new Date("2023-12-25T10:30:45");
            const result = dateHelper.formatDate(date);
            expect(result).toBe("25.12.2023T10:30:45");
        });

        it("should pad single-digit day and month", () => {
            const date = new Date("2023-01-05T05:05:05");
            const result = dateHelper.formatDate(date);
            expect(result).toBe("05.01.2023T05:05:05");
        });
    });

    describe("generateLastDay", () => {
        it("should generate last day of the month correctly", () => {
            const today = new Date();
            const lastDay = dateHelper.generateLastDay();
            expect(lastDay.getDate()).toBe(today.getDate() - 1);
            expect(lastDay.getHours()).toBe(23);
            expect(lastDay.getMinutes()).toBe(59);
            expect(lastDay.getSeconds()).toBe(59);
            expect(lastDay.getMilliseconds()).toBe(999);
        });
    });

    describe("generateFormattedLastDay", () => {
        it("should generate formatted last day", () => {
            const lastDayFormatted = dateHelper.generateFormattedLastDay();
            const today = new Date();
            const expected = dateHelper.formatDate(
                new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 23, 59, 59, 999)
            );
            expect(lastDayFormatted).toBe(expected);
        });
    });

    describe("extractDateToPrettyString", () => {
        it("should extract date as a pretty formatted string", () => {
            const date = new Date("2023-12-25T10:30:45");
            const result = dateHelper.extractDateToPrettyString(date);
            expect(result).toBe("25.12.2023");
        });
    });

    describe("extractHoursAndMinutes", () => {
        it("should extract hours and minutes as a string", () => {
            const date = new Date("2023-12-25T10:30:45");
            const result = dateHelper.extractHoursAndMinutes(date);
            expect(result).toBe("10:30 AM");
        });
    });

    describe("getPrettyDateFromStr", () => {
        it("should convert date string to pretty format", () => {
            const result = dateHelper.getPrettyDateFromStr("2023-12-25");
            expect(result).toBe("25.12.2023");
        });
    });

    describe("getDateFromPrettyStr", () => {
        it("should convert pretty date string back to standard format", () => {
            const result = dateHelper.getDateFromPrettyStr("25.12.2023");
            expect(result).toBe("2023-12-25");
        });
    });
});
