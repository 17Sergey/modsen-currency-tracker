export const findBanksByCurrency = (currency: string, banksData: BanksDataType): MatchedBankResultType[] => {
    return Object.entries(banksData).flatMap(([bankName, branches]) =>
        branches
            .filter((branch) => branch.currencies.some((backCurrency) => backCurrency.includes(currency)))
            .map((branch) => ({
                bank: bankName.slice(0, bankName.length - 1),
                coordinates: branch.coordinates,
                currencies: branch.currencies,
            }))
    );
};
