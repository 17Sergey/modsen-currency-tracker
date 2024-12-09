import { ChangeEvent, useEffect, useState } from "react";

import { convertCurrency } from "@utils/convertCurrency.tsx";
import { isValidNumber } from "@utils/isValidNumber.ts";

export const useCurrencyConverter = (baseCurrency: CurrencyData, initialCurrencies: CurrencyData[]) => {
    const [formData, setFormData] = useState({
        baseCurrencyValue: "",
        targetCurrencyValue: "",
        selectedTargetCurrency: initialCurrencies[0],
    });

    const [changedInput, setChangedInput] = useState("");

    useEffect(() => {
        if (changedInput === "") return;

        if (changedInput === "baseCurrencyValue") {
            const result = convertCurrency(
                Number(formData.baseCurrencyValue),
                baseCurrency.value,
                formData.selectedTargetCurrency.value
            );
            setFormData((prevState) => ({ ...prevState, targetCurrencyValue: result.toString() }));
        }

        if (changedInput === "targetCurrencyValue") {
            const result = convertCurrency(
                Number(formData.targetCurrencyValue),
                formData.selectedTargetCurrency.value,
                baseCurrency.value
            );
            setFormData((prevState) => ({ ...prevState, baseCurrencyValue: result.toString() }));
        }
    }, [
        baseCurrency.value,
        formData.baseCurrencyValue,
        formData.targetCurrencyValue,
        formData.selectedTargetCurrency.value,
        changedInput,
    ]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isValidNumber(e.target.value)) return;

        setFormData({ ...formData, [e.target.name]: e.target.value });
        setChangedInput(e.target.name);
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newCurrency =
            initialCurrencies.find(({ currency }) => currency === e.target.value) || initialCurrencies[0];
        setFormData({ ...formData, selectedTargetCurrency: newCurrency });
    };

    return { formData, handleInputChange, handleSelectChange, setFormData };
};
