import { FC } from "react";

import { getCurrencyCaption } from "@utils/getCurrencyCaption.ts";

import { SelectTargetCurrency } from "./SelectTargetCurrency/SelectTargetCurrency.tsx";
import { StyledInput, StyledTargetCurrency, StyledTargetFields } from "./styled.ts";

type BaseInputProps = ConverterCommonInputProps & {
    curreciesArray: CurrencyData[];
    onHandleSelectChange: SelectChangeEventHandler;
};

export const TargetInput: FC<BaseInputProps> = ({
    name,
    currencyItem,
    onHandleInputChange,
    curreciesArray,
    onHandleSelectChange,
}) => {
    return (
        <StyledTargetCurrency>
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
                />
                <SelectTargetCurrency
                    curreciesArray={curreciesArray}
                    selectedCurrency={currencyItem.currency}
                    onHandleSelectChange={onHandleSelectChange}
                />
            </StyledTargetFields>
        </StyledTargetCurrency>
    );
};
