import { FC } from "react";

import { DATA_CY } from "@constants/cypress.ts";
import { getCurrencyCaption } from "@utils/getCurrencyCaption.ts";

import { StyledInput } from "./styled.ts";

type BaseInputProps = ConverterCommonInputProps;

export const BaseInput: FC<BaseInputProps> = ({ name, currencyItem, onHandleInputChange }) => (
    <>
        <div>
            <label htmlFor={name}>{getCurrencyCaption(currencyItem.currency)}</label>
        </div>
        <StyledInput
            type="text"
            id={name}
            name={name}
            value={currencyItem.value}
            onChange={onHandleInputChange}
            data-cy={DATA_CY.BASE_CURRENCY_INPUT}
        />
    </>
);
