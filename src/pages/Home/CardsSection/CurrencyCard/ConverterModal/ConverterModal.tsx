import { FC, FormEvent } from "react";

import Modal from "@components/Modal";
import { DATA_CY } from "@constants/cypress.ts";
import { CURRENCY_INPUTS } from "@constants/homePage.ts";
import { useAvailiableCurrencies } from "@hooks/useAvailiableCurrencies.ts";
import { useCurrencyConverter } from "@pages/Home/CardsSection/CurrencyCard/ConverterModal/_hooks/useCurrencyConverter.ts";
import BaseInput from "@pages/Home/CardsSection/CurrencyCard/ConverterModal/BaseInput/index.tsx";
import TargetControls from "@pages/Home/CardsSection/CurrencyCard/ConverterModal/TargetControls";

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
    const currenciesArray = useAvailiableCurrencies();
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
            <StyledBox data-cy={DATA_CY.CONVERTER_MODAL}>
                <StyledWrapper>
                    <StyledHeading>Currency Converter</StyledHeading>
                    <StyledCloseBtn data-cy={DATA_CY.CLOSE_MODAL} aria-label="Close modal" onClick={onClose}>
                        <StyledCrossIcon />
                    </StyledCloseBtn>
                </StyledWrapper>
                <StyledForm onSubmit={handleSubmit}>
                    <BaseInput
                        name={CURRENCY_INPUTS.BASE_CURRENCY_INPUT}
                        currencyItem={baseCurrencyItem}
                        onHandleInputChange={handleInputChange}
                    />
                    <StyledExchangeIcon />
                    <TargetControls
                        name={CURRENCY_INPUTS.TARGET_CURRENCY_INPUT}
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
