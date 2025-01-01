import { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Loader } from "@components/Loader/Loader.tsx";
import CurrenciesCardsList from "@pages/Home/CardsSection/CurrenciesCardsList";

import { StyledCardsSection, StyledError, StyledSectionHeading } from "./styled.ts";

type CardsSectionProps = {
    currencies: CurrencyData[];
    isLoading: boolean;
    errorMessage: string | null;
};

export const CardsSection: FC<CardsSectionProps> = ({ currencies, isLoading, errorMessage }) => {
    const errorRedrerProp = (
        <p>
            Error occurred. <StyledError>{errorMessage}</StyledError>
        </p>
    );

    return (
        <StyledCardsSection>
            <StyledSectionHeading>Quotes</StyledSectionHeading>
            <ErrorBoundary fallback={errorRedrerProp}>
                {isLoading && <Loader variant="md" />}
                {!!currencies && <CurrenciesCardsList currencies={currencies} />}
            </ErrorBoundary>
        </StyledCardsSection>
    );
};
