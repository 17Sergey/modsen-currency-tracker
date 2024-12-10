import { FC } from "react";

import { getCurrencyCaption } from "@utils/getCurrencyCaption.ts";

import { StyledBaseCurrency, StyledInput } from "./styled.ts";

type BaseInputProps = ConverterCommonInputProps;

export const BaseInput: FC<BaseInputProps> = ({ name, currencyItem, onHandleInputChange }) => {
    return (
        <StyledBaseCurrency>
            <div>
                <label htmlFor={name}>{getCurrencyCaption(currencyItem.currency)}</label>
            </div>
            <StyledInput type="text" id={name} name={name} value={currencyItem.value} onChange={onHandleInputChange} />
        </StyledBaseCurrency>
    );
};
