import CurrencyCard from "@pages/Home/CardsSection/CurrencyCard";

import { StyledList } from "./styled.ts";

interface CurrenciesCardsListInterface {
    currencies: CurrencyData[];
}

export const CurrenciesCardsList: React.FC<CurrenciesCardsListInterface> = ({ currencies }) => (
    <div>
        <StyledList>
            {currencies.map(({ currency, value }) => (
                <li key={currency}>
                    <CurrencyCard currency={currency} value={value} />
                </li>
            ))}
        </StyledList>
    </div>
);
