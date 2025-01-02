import React, { Component } from "react";

import { CustomSelect } from "@components/CustomSelect/CustomSelect.tsx";
import { DATA_CY } from "@constants/cypress.ts";

import { StyledStocksSelect } from "./styled.ts";

type StocksSelectProps = {
    options: string[];
    currentStock: StockType;
    onSelect: OnSelectCallback;
};

export class StocksSelect extends Component<StocksSelectProps> {
    render() {
        const { options, currentStock, onSelect } = this.props;

        return (
            <StyledStocksSelect>
                <CustomSelect
                    options={options}
                    currenctValue={currentStock.code}
                    onSelect={onSelect}
                    data-cy={DATA_CY.STOCK_SELECT}
                />
            </StyledStocksSelect>
        );
    }
}
