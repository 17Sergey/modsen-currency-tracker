import { FC, FormEvent } from "react";

import Modal from "@components/Modal";
import { useCurrencyConverter } from "@hooks/useCurrencyConverter.ts";
import { useCurrencyData } from "@hooks/useCurrencyData.ts";
import BaseInput from "@pages/Home/CardsSection/CurrencyCard/ConverterModal/BaseInput/index.tsx";
import TargetInput from "@pages/Home/CardsSection/CurrencyCard/ConverterModal/TargetInput";

import {
    StyledBox,
    StyledCloseBtn,
    StyledCrossIcon,
    StyledExchangeIcon,
    StyledForm,
    StyledHeading,
    StyledWrapper,
} from "./styled.ts";

type ConverterModalProps = {
    baseCurrency: CurrencyData;
    onClose: VoidFunction;
};

export const ConverterModal: FC<ConverterModalProps> = ({ baseCurrency, onClose }) => {
    const currenciesArray = useCurrencyData();
    const { formData, handleInputChange, handleSelectChange } = useCurrencyConverter(baseCurrency, currenciesArray);

    const baseCurrencyItem = { value: Number(formData.baseCurrencyValue), currency: baseCurrency.currency };
    const targetCurrencyItem = {
        value: Number(formData.targetCurrencyValue),
        currency: formData.selectedTargetCurrency.currency,
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
                    <BaseInput
                        name={"baseCurrencyValue"}
                        currencyItem={baseCurrencyItem}
                        onHandleInputChange={handleInputChange}
                    />
                    <StyledExchangeIcon />
                    <TargetInput
                        name={"targetCurrencyValue"}
                        currencyItem={targetCurrencyItem}
                        onHandleInputChange={handleInputChange}
                        curreciesArray={currenciesArray}
                        onHandleSelectChange={handleSelectChange}
                    />
                </StyledForm>
            </StyledBox>
        </Modal>
    );
};
