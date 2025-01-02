import { FC } from "react";

import { DATA_CY } from "@constants/cypress.ts";
import { getCurrencyCaption } from "@utils/getCurrencyCaption.ts";

import { SelectTargetCurrency } from "./SelectTargetCurrency/SelectTargetCurrency.tsx";
import { StyledInput, StyledTargetFields } from "./styled.ts";

type TargetControlsProps = ConverterCommonInputProps & {
    curreciesArray: CurrencyData[];
    onHandleSelectChange: OnHandleSelectChangeCallback;
};

export const TargetControls: FC<TargetControlsProps> = ({
    name,
    currencyItem,
    onHandleInputChange,
    curreciesArray,
    onHandleSelectChange,
}) => (
    <>
        <div>
            <label htmlFor={name}>{getCurrencyCaption(currencyItem.currency)}</label>
        </div>
        <StyledTargetFields>
            <StyledInput
                type="text"
                id={name}
                name={name}
                value={currencyItem.value}
                onChange={onHandleInputChange}
                data-cy={DATA_CY.TARGET_CURRENCY_INPUT}
            />
            <SelectTargetCurrency
                curreciesArray={curreciesArray}
                selectedCurrency={currencyItem.currency}
                onHandleSelectChange={onHandleSelectChange}
            />
        </StyledTargetFields>
    </>
);
