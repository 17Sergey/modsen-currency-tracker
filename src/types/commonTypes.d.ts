type CurrencyData = {
    currency: string;
    value: number;
};

type CurrencyResponse = {
    meta: {
        last_updated_at: Date;
    };
    data: {
        AUD: number;
        CAD: number;
        CZK: number;
        EUR: number;
        GBP: number;
        JPY: number;
        PLN: number;
        RUB: number;
    };
};

type CurrencyResponseTransformed = {
    meta: {
        last_updated_at: string;
    };
    data: CurrencyData[];
};

type LoaderVariants = "sm" | "md" | "lg";

type InputChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => void;

type SelectChangeEventHandler = (e: ChangeEvent<HTMLSelectElement>) => void;

type OnHandleSelectChangeCallback = (optionValue: strin) => void;

type OnSelectCallback = (value: string) => void;

type StringKeyedObject<T> = {
    [key: string]: T;
};

type RenderOptionProps = {
    option: string;
    onOptionClick: (clickedOption: string) => void;
};
