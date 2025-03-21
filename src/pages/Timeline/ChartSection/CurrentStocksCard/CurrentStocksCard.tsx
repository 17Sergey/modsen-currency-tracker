import React, { PureComponent } from "react";

import { IconMatcher } from "@components/IconMatcher/IconMatcher.tsx";
import { DATA_CY } from "@constants/cypress.ts";

import { StyledCard, StyledCode, StyledIcon, StyledName, StyledText } from "./styled.ts";

type CurrentStocksCardProps = {
    stock: StockType;
};

export class CurrentStocksCard extends PureComponent<CurrentStocksCardProps> {
    render() {
        const { stock } = this.props;

        return (
            <StyledCard data-cy={DATA_CY.STOCK_CARD}>
                <StyledIcon>
                    <IconMatcher code={stock.code} />
                </StyledIcon>
                <StyledText>
                    <StyledName>{stock.name}</StyledName>
                    <StyledCode>{stock.code}</StyledCode>
                </StyledText>
            </StyledCard>
        );
    }
}
