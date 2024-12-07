import { Loader } from "@components/Loader/Loader.tsx";
import CurrenciesCardsList from "@pages/Home/CardsSection/CurrenciesCardsList";
import { useGetCurrenciesQuery } from "@store/api/currencyAPI.ts";

import { StyledCardsSection, StyledSectionHeading } from "./styled.ts";

export const CardsSection = () => {
    const { data: currencies, isLoading, error } = useGetCurrenciesQuery();
    return (
        <StyledCardsSection>
            <StyledSectionHeading>Quotes</StyledSectionHeading>
            {error && <p>Error: {JSON.stringify(error)}</p>}
            {isLoading && <Loader variant="md" />}
            {currencies && <CurrenciesCardsList currencies={currencies} />}
        </StyledCardsSection>
    );
};
