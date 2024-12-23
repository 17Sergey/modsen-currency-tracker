import { FC, FormEvent } from "react";

import Modal from "@components/Modal";
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
    StyledScrollableContent,
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
            <StyledBox>
                <StyledWrapper>
                    <StyledHeading>Currency Converter</StyledHeading>
                    <StyledCloseBtn aria-label="Close modal" onClick={onClose}>
                        <StyledCrossIcon />
                    </StyledCloseBtn>
                </StyledWrapper>
                <StyledScrollableContent>
                    <StyledForm onSubmit={handleSubmit}>
                        <BaseInput
                            name={"baseCurrencyValue"}
                            currencyItem={baseCurrencyItem}
                            onHandleInputChange={handleInputChange}
                        />
                        <StyledExchangeIcon />
                        <TargetControls
                            name={"targetCurrencyValue"}
                            currencyItem={targetCurrencyItem}
                            onHandleInputChange={handleInputChange}
                            curreciesArray={currenciesArray}
                            onHandleSelectChange={handleSelectChange}
                        />
                    </StyledForm>
                </StyledScrollableContent>
            </StyledBox>
        </Modal>
    );
};
