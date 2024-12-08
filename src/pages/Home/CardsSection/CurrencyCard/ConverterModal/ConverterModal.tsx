import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";

import Modal from "@components/Modal";
import { CURRENCY_CODES } from "@constants/constants.ts";
import { useGetCurrenciesQuery } from "@store/api/currencyAPI";
import { convertCurrency } from "@utils/convertCurrency.tsx";
import { getCurrencyCaption } from "@utils/getCurrencyCaption.ts";
import { isValidNumber } from "@utils/isValidNumber.ts";

import {
    StyledBox,
    StyledCloseBtn,
    StyledCrossIcon,
    StyledExchangeIcon,
    StyledForm,
    StyledHeading,
    StyledInput,
    StyledSelect,
    StyledSelectedCurrency,
    StyledTargetCurrency,
    StyledTargetFields,
    StyledWrapper,
} from "./styled.ts";

const USD_ITEM: CurrencyData = {
    currency: CURRENCY_CODES.USD,
    value: 1,
};

type ConverterModalProps = {
    baseCurrency: CurrencyData;
    onClose: VoidFunction;
};

export const ConverterModal: FC<ConverterModalProps> = ({ baseCurrency, onClose }) => {
    const { data: currencies } = useGetCurrenciesQuery();
    const curreciesArray = currencies?.data.concat([USD_ITEM]) || [];

    const [formData, setFormData] = useState({
        baseCurrencyValue: "",
        targetCurrencyValue: "",
        selectedTargetCurrency: curreciesArray[0],
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
            setFormData((formDataState) => ({ ...formDataState, targetCurrencyValue: result.toString() }));
        }

        if (changedInput === "targetCurrencyValue") {
            const result = convertCurrency(
                Number(formData.targetCurrencyValue),
                formData.selectedTargetCurrency.value,
                baseCurrency.value
            );
            setFormData((formDataState) => ({ ...formDataState, baseCurrencyValue: result.toString() }));
        }
    }, [
        baseCurrency.value,
        formData.baseCurrencyValue,
        formData.targetCurrencyValue,
        changedInput,
        formData.selectedTargetCurrency,
    ]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!isValidNumber(e.target.value)) return;

        setFormData({ ...formData, [e.target.name]: e.target.value });
        setChangedInput(e.target.name);
    };

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const newCurrency = curreciesArray.find(({ currency }) => currency === e.target.value) || curreciesArray[0];
        setFormData({ ...formData, selectedTargetCurrency: newCurrency });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <Modal onClose={onClose}>
            <StyledBox>
                <StyledWrapper>
                    <StyledHeading>Currency Converter</StyledHeading>
                    <StyledCloseBtn aria-label="Close modal" onClick={onClose}>
                        <StyledCrossIcon />
                    </StyledCloseBtn>
                </StyledWrapper>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledSelectedCurrency>
                        <div>
                            <label htmlFor="baseCurrencyValue">{getCurrencyCaption(baseCurrency.currency)}</label>
                        </div>
                        <StyledInput
                            type="text"
                            id="baseCurrencyValue"
                            name="baseCurrencyValue"
                            value={formData.baseCurrencyValue}
                            onChange={handleInputChange}
                        />
                    </StyledSelectedCurrency>
                    <StyledExchangeIcon />
                    <StyledTargetCurrency>
                        <label htmlFor="targetCurrencyValue">
                            {getCurrencyCaption(formData.selectedTargetCurrency.currency)}
                        </label>
                        <StyledTargetFields>
                            <StyledInput
                                type="text"
                                id="targetCurrencyValue"
                                name="targetCurrencyValue"
                                value={formData.targetCurrencyValue}
                                onChange={handleInputChange}
                            />
                            <StyledSelect
                                onChange={handleSelectChange}
                                value={formData.selectedTargetCurrency.currency}
                            >
                                {curreciesArray.map(({ currency }) => (
                                    <option key={currency} value={currency}>
                                        {currency}
                                    </option>
                                ))}
                            </StyledSelect>
                        </StyledTargetFields>
                    </StyledTargetCurrency>
                </StyledForm>
            </StyledBox>
        </Modal>
    );
};
