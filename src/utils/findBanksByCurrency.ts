export const findBanksByCurrency = (currency: string, banksData: BanksDataType): MatchedBankResultType[] => {
    return Object.entries(banksData).flatMap(([bankName, branches]) =>
        branches
            .filter((branch) => branch.currencies.some((backCurrency) => backCurrency.includes(currency)))
            .map((branch) => ({
                bank: bankName,
                coordinates: branch.coordinates,
                currencies: branch.currencies,
            }))
    );
};
