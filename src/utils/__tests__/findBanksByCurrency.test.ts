import { findBanksByCurrency } from "../findBanksByCurrency.ts";

describe("findBanksByCurrency", () => {
    const banksData = {
        "Bank A": [
            {
                coordinates: { longitude: 1.0, latitude: 2.0 },
                currencies: ["USD", "EUR"],
            },
            {
                coordinates: { longitude: 1.1, latitude: 2.1 },
                currencies: ["GBP"],
            },
        ],
        "Bank B": [
            {
                coordinates: { longitude: 3.0, latitude: 4.0 },
                currencies: ["AUD", "USD"],
            },
        ],
        "Bank C": [
            {
                coordinates: { longitude: 5.0, latitude: 6.0 },
                currencies: ["CAD"],
            },
        ],
        "Bank D": [
            {
                coordinates: { longitude: 6.0, latitude: 6.1 },
                currencies: ["AUD", "CAD"],
            },
            {
                coordinates: { longitude: 6.2, latitude: 6.3 },
                currencies: ["AUD"],
            },
        ],
    };

    it("should return banks that offer the specified currency", () => {
        const result = findBanksByCurrency("USD", banksData);
        const expectedResult = [
            {
                bank: "Bank A",
                coordinates: { longitude: 1.0, latitude: 2.0 },
                currencies: ["USD", "EUR"],
            },
            {
                bank: "Bank B",
                coordinates: { longitude: 3.0, latitude: 4.0 },
                currencies: ["AUD", "USD"],
            },
        ];
        expect(result).toEqual(expectedResult);
    });

    it("should return banks and banks districts that offer the specified currency", () => {
        const result = findBanksByCurrency("AUD", banksData);
        const expectedResult = [
            {
                bank: "Bank B",
                coordinates: { longitude: 3.0, latitude: 4.0 },
                currencies: ["AUD", "USD"],
            },
            {
                bank: "Bank D",
                coordinates: { longitude: 6.0, latitude: 6.1 },
                currencies: ["AUD", "CAD"],
            },
            {
                bank: "Bank D",
                coordinates: { longitude: 6.2, latitude: 6.3 },
                currencies: ["AUD"],
            },
        ];
        expect(result).toEqual(expectedResult);
    });

    it("should return an empty array when no banks offer the specified currency", () => {
        const result = findBanksByCurrency("JPY", banksData);
        const expectedResult = [] as MatchedBankResultType[];
        expect(result).toEqual(expectedResult);
    });

    it("should return banks with branches that offer multiple currencies", () => {
        const result = findBanksByCurrency("GBP", banksData);
        const expectedResult = [
            {
                bank: "Bank A",
                coordinates: { longitude: 1.1, latitude: 2.1 },
                currencies: ["GBP"],
            },
        ];
        expect(result).toEqual(expectedResult);
    });
});
