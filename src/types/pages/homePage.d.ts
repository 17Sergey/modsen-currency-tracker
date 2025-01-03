type MenuItem = {
    caption: string;
    location: string;
};

type ConverterCommonInputProps = {
    name: string;
    currencyItem: CurrencyData;
    onHandleInputChange: InputChangeEventHandler;
};

type ConverterFormDataType = {
    baseCurrencyValue: string;
    targetCurrencyValue: string;
    selectedTargetCurrency: CurrencyData;
};
