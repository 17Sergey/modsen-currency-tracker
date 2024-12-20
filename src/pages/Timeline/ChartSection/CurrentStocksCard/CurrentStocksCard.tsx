import { FC } from "react";

import { IconMatcher } from "@components/IconMatcher/IconMatcher.tsx";

import { StyledCard, StyledCode, StyledIcon, StyledName, StyledText } from "./styled.ts";

type CurrentStocksCardProps = {
    stock: StockType;
};

export const CurrentStocksCard: FC<CurrentStocksCardProps> = ({ stock }) => (
    <StyledCard>
        <StyledIcon>
            <IconMatcher code={stock.code} />
        </StyledIcon>
        <StyledText>
            <StyledName>{stock.name}</StyledName>
            <StyledCode>{stock.code}</StyledCode>
        </StyledText>
    </StyledCard>
);
