import { FC } from "react";

import { CustomSelect } from "@components/CustomSelect/CustomSelect.tsx";
import { DATA_CY } from "@constants/cypress.ts";

import { StyledSelect } from "./styled.ts";

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
        <StyledSelect>
            <CustomSelect
                options={formattedOptions}
                currenctValue={selectedCurrency}
                onSelect={onHandleSelectChange}
                data-cy={DATA_CY.SELECT_CURRENCY_CONTROL}
            />
        </StyledSelect>
    );
};
