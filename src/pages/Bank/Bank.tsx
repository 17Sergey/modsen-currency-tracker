import { useState } from "react";

import { ElasticSearch } from "@components/ElasticSearch/ElasticSearch.tsx";
import { IconMatcher } from "@components/IconMatcher/IconMatcher.tsx";
import LayoutContainer from "@components/LayoutContainer";
import { DATA_CY } from "@constants/cypress.ts";
import { useAvailiableCurrencies } from "@hooks/useAvailiableCurrencies.ts";
import BankMap from "@pages/Bank/BankMap";

import { StyledCurrencyOptionButton, StyledElastic, StyledHeading, StyledMap, StyledSection } from "./styled.ts";

export const Bank = () => {
    const currenciesArray = useAvailiableCurrencies();
    const currencyCodes = currenciesArray.map(({ currency }) => currency);

    const [foundCurrency, setFoundCurrency] = useState<string>("");

    const handleSelectFoundCurrency = (currency: string) => {
        setFoundCurrency(currency);
    };

    const handleClearSearch = () => {
        setFoundCurrency("");
    };

    const renderOption = ({ option: currency, onOptionClick }: RenderOptionProps) => {
        return (
            <StyledCurrencyOptionButton key={currency} onClick={() => onOptionClick(currency)}>
                <IconMatcher code={currency} />
                {currency}
            </StyledCurrencyOptionButton>
        );
    };

    return (
        <StyledSection>
            <LayoutContainer>
                <StyledHeading>Search currency in the bank</StyledHeading>
                <StyledElastic>
                    <ElasticSearch
                        options={currencyCodes}
                        placeholder={"Type currency code..."}
                        onSelect={handleSelectFoundCurrency}
                        onClear={handleClearSearch}
                        renderOption={renderOption}
                        data-cy={DATA_CY.MAP_SEARCH_INPUT}
                    />
                </StyledElastic>
                <StyledMap data-cy={DATA_CY.MAP}>
                    <BankMap foundCurrency={foundCurrency} />
                </StyledMap>
            </LayoutContainer>
        </StyledSection>
    );
};
