import { FC } from "react";

import { Loader } from "@components/Loader/Loader.tsx";
import CurrenciesCardsList from "@pages/Home/CardsSection/CurrenciesCardsList";

import { StyledCardsSection, StyledError, StyledSectionHeading } from "./styled.ts";

type CardsSectionProps = {
    currencies: CurrencyData[];
    isLoading: boolean;
    errorMessage: string | null;
};

export const CardsSection: FC<CardsSectionProps> = ({ currencies, isLoading, errorMessage }) => (
    <StyledCardsSection>
        <StyledSectionHeading>Quotes</StyledSectionHeading>
        {errorMessage && (
            <p>
                Error occurred. <StyledError>{errorMessage}</StyledError>
            </p>
        )}
        {isLoading && <Loader variant="md" />}
        {currencies && <CurrenciesCardsList currencies={currencies} />}
    </StyledCardsSection>
);
