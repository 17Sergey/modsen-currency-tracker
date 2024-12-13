import { FC } from "react";

import { CustomSelect } from "@components/CustomSelect/CustomSelect.tsx";

import { StyledSelect, StyledSelectWrapper } from "./styled.ts";

type SelectTargetCurrencyProps = {
    curreciesArray: CurrencyData[];
    selectedCurrency: CurrencyData["currency"];
    onHandleSelectChange: OnHandleSelectChangeCallback;
};

export const SelectTargetCurrency: FC<SelectTargetCurrencyProps> = ({
    curreciesArray,
    selectedCurrency,
    onHandleSelectChange,
}) => {
    const formattedOptions = curreciesArray.map(({ currency }) => currency);

    return (
        <>
            <StyledSelectWrapper>
                <StyledSelect>
                    <CustomSelect
                        options={formattedOptions}
                        currenctValue={selectedCurrency}
                        onSelect={onHandleSelectChange}
                    />
                </StyledSelect>
            </StyledSelectWrapper>
        </>
    );
};