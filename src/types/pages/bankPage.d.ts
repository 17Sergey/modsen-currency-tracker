type CoordinatesType = {
    longitude: number;
    latitude: number;
    zoom?: number;
};

type BankBranchType = {
    coordinates: CoordinatesType;
    currencies: string[];
};

type BanksDataType = {
    [key: string]: BankBranchType[];
};

type MatchedBankResultType = {
    bank: string;
    coordinates: CoordinatesType;
    currencies: string[];
};
