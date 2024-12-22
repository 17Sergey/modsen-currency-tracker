import CurrencyCard from "@pages/Home/CardsSection/CurrencyCard";

import { StyledList, StyledListItem, StyledWrapper } from "./styled.ts";

interface CurrenciesCardsListInterface {
    currencies: CurrencyData[];
}

export const CurrenciesCardsList: React.FC<CurrenciesCardsListInterface> = ({ currencies }) => (
    <StyledWrapper>
        <StyledList>
            {currencies.map(({ currency, value }) => (
                <StyledListItem key={currency}>
                    <CurrencyCard currency={currency} value={value} />
                </StyledListItem>
            ))}
        </StyledList>
    </StyledWrapper>
);
