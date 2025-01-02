import { DATA_CY } from "@constants/cypress.ts";
import CurrencyCard from "@pages/Home/CardsSection/CurrencyCard";

import { StyledList } from "./styled.ts";

interface CurrenciesCardsListInterface {
    currencies: CurrencyData[];
}

export const CurrenciesCardsList: React.FC<CurrenciesCardsListInterface> = ({ currencies }) => (
    <div>
        <StyledList data-cy={DATA_CY.CURRENCIES_CARDS_LIST}>
            {currencies.map(({ currency, value }) => (
                <li key={currency} data-cy={DATA_CY.CURRENCY_CARD}>
                    <CurrencyCard currency={currency} value={value} />
                </li>
            ))}
        </StyledList>
    </div>
);
