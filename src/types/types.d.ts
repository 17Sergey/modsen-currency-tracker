type MenuItem = {
    caption: string;
    location: string;
};

type CurrencyResponse = {
    meta: {
        last_updated_at: string;
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

type CurrencyData = {
    currency: string;
    value: number;
};

type LoaderVariants = "sm" | "md" | "lg";
