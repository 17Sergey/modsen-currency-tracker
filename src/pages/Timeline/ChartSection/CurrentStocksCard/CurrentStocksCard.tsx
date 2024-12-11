import { FC } from "react";

import { IconMatcher } from "@components/IconMatcher/IconMatcher.tsx";

import { StyledCard, StyledCode, StyledIcon, StyledName, StyledText } from "./styled.ts";

type CurrentStocksCardProps = {
    stocks: StocksType;
};

export const CurrentStocksCard: FC<CurrentStocksCardProps> = ({ stocks }) => (
    <>
        <StyledCard>
            <StyledIcon>
                <IconMatcher code={stocks.code} />
            </StyledIcon>
            <StyledText>
                <StyledName>{stocks.name}</StyledName>
                <StyledCode>{stocks.code}</StyledCode>
            </StyledText>
        </StyledCard>
    </>
);
