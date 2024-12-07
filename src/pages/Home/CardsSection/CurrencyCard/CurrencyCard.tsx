import { FC } from "react";

import CurrencyIcon from "@pages/Home/CardsSection/CurrencyCard/CurrencyIcon";
import { getCurrencyCaption } from "@utils/getCurrencyCaption.ts";

import { StyledCard, StyledIcon, StyledInfo, StyledName } from "./styled.ts";

type CurrencyCardProps = CurrencyData;

export const CurrencyCard: FC<CurrencyCardProps> = ({ currency, value }) => {
    return (
        <StyledCard>
            <StyledIcon>
                <CurrencyIcon currency={currency} />
            </StyledIcon>
            <StyledInfo>
                <StyledName>{getCurrencyCaption(currency)}</StyledName>
                <p>
                    1 USD = {Number(value).toFixed(2)} {currency}
                </p>
            </StyledInfo>
        </StyledCard>
    );
};
