import { FC } from "react";

import { CustomSelect } from "@components/CustomSelect/CustomSelect.tsx";

import { StyledStocksSelect } from "./styled.ts";

type StocksSelectProps = {
    options: string[];
    currentStock: StockType;
    onSelect: OnSelectCallback;
};

export const StocksSelect: FC<StocksSelectProps> = ({ options, currentStock, onSelect }) => {
    return (
        <StyledStocksSelect>
            <CustomSelect options={options} currenctValue={currentStock.code} onSelect={onSelect} />
        </StyledStocksSelect>
    );
};
