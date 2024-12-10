import { FC } from "react";

import { StyledSelect } from "./styled.ts";

type SelectTargetCurrencyProps = {
    curreciesArray: CurrencyData[];
    selectedCurrency: CurrencyData["currency"];
    onHandleSelectChange: SelectChangeEventHandler;
};

export const SelectTargetCurrency: FC<SelectTargetCurrencyProps> = ({
    curreciesArray,
    selectedCurrency,
    onHandleSelectChange,
}) => {
    return (
        <>
            <StyledSelect onChange={onHandleSelectChange} value={selectedCurrency}>
                {curreciesArray.map(({ currency }) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </StyledSelect>
        </>
    );
};
